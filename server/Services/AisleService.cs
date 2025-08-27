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

        public async Task<Aisle> SaveAisle(Aisle aisle)
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
                if (existingAisle != null)
                {
                    _context.Entry(existingAisle).CurrentValues.SetValues(aisle);
                }
            }
            else
            {
                _context.Aisle.Add(aisle);
            }

            await _context.SaveChangesAsync();
            return aisle;
        }
    }
}
