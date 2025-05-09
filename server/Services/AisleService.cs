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

        public async Task<Aisle> AddAisle(Aisle aisle)
        {
            _context.Aisle.Add(aisle);
            await _context.SaveChangesAsync();
            return aisle;
        }
    }
}
