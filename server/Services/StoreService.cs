using GroceryGetter.Database;
using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.EntityFrameworkCore;

namespace GroceryGetter.Services
{
    public class StoreService : IStoreService
    {
        private readonly PgDbContext _context;

        public StoreService(PgDbContext context)
        {
            _context = context;
        }

        public async Task<Store?> GetStoreById(int storeId)
        {
            return await _context.Store.FindAsync(storeId);
        }

        public async Task<List<Store>> GetAllStores()
        {
            return await _context.Store.ToListAsync();
        }

        public async Task<Store> AddStore(Store store)
        {
            _context.Store.Add(store);
            await _context.SaveChangesAsync();
            return store;
        }
    }
}
