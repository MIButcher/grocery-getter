using GroceryGetter.Database;
using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.EntityFrameworkCore;

namespace GroceryGetter.Services
{
    public class AisleService : IAisleService
    {
        private readonly PgDbContext _context;

        public AisleService(PgDbContext context)
        {
            _context = context;
        }

        public async Task<Aisle?> GetAisleById(int id)
        {
            return await _context.Aisle.FindAsync(id);
        }

        public async Task<IEnumerable<Aisle>> GetAisleByLayoutId(int layoutId)
        {
            return await _context.Aisle
                .Where(a => a.LayoutId == layoutId)
                .ToListAsync();
        }

        public async Task<IEnumerable<Aisle>> GetAllAisles()
        {
            return await _context.Aisle.ToListAsync();
        }

        public async Task<IEnumerable<Aisle>> SaveAisle(Aisle aisle)
        {
            bool isDuplicate = await _context.Aisle
                .AnyAsync(a => a.LayoutId == aisle.LayoutId && a.Name == aisle.Name && a.Id != aisle.Id);

            if (isDuplicate)
            {
                throw new InvalidOperationException($"An aisle with the name '{aisle.Name}' already exists in this layout.");
            }

            if (aisle.Id > 0)
            {
                var existingAisle = await _context.Aisle.FindAsync(aisle.Id);
                if (existingAisle == null)
                {
                    throw new InvalidOperationException("Aisle not found.");
                }

                if (existingAisle.Lineup != aisle.Lineup)
                {
                    await AdjustLineupAsync(aisle.LayoutId, existingAisle.Lineup, aisle.Lineup, aisle.Id);
                }

                _context.Entry(existingAisle).CurrentValues.SetValues(aisle);

            }
            else
            {
                await AdjustLineupAsync(aisle.LayoutId, null, aisle.Lineup, 0);
                var aisleToAdd = new Aisle
                {
                    LayoutId = aisle.LayoutId,
                    Name = aisle.Name,
                    Lineup = aisle.Lineup
                };
                _context.Aisle.Add(aisleToAdd);
            }

            await _context.SaveChangesAsync();
            return await this.GetAisleByLayoutId(aisle.LayoutId);
        }

        private async Task AdjustLineupAsync(int layoutId, int? oldLineup, int newLineup, int aisleId)
        {
            if (oldLineup.HasValue)
            {
                // Update scenario: shift affected aisles
                if (newLineup > oldLineup.Value)
                {
                    var affected = await _context.Aisle
                        .Where(a => a.LayoutId == layoutId &&
                                    a.Lineup > oldLineup.Value &&
                                    a.Lineup <= newLineup &&
                                    a.Id != aisleId)
                        .ToListAsync();

                    foreach (var a in affected)
                    {
                        a.Lineup--;
                    }
                }
                else
                {
                    var affected = await _context.Aisle
                        .Where(a => a.LayoutId == layoutId &&
                                    a.Lineup >= newLineup &&
                                    a.Lineup < oldLineup.Value &&
                                    a.Id != aisleId)
                        .ToListAsync();

                    foreach (var a in affected)
                    {
                        a.Lineup++;
                    }
                }
            }
            else
            {
                // Insert scenario: shift all aisles at or after newLineup
                var affected = await _context.Aisle
                    .Where(a => a.LayoutId == layoutId &&
                                a.Lineup >= newLineup)
                    .ToListAsync();

                foreach (var a in affected)
                {
                    a.Lineup++;
                }
            }
        }
    }
}
