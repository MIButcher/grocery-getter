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

        public async Task<Store> SaveStore(Store store)
        {
            var duplicate = await _context.Store
                .Where(s => s.Name.ToLower() == store.Name.ToLower() && s.Id != store.Id)
                .FirstOrDefaultAsync();

            if (duplicate != null)
            {
                throw new InvalidOperationException($"A store with the name '{store.Name}' already exists.");
            }

            if (store.Id > 0)
            {
                var existingStore = await _context.Store.FindAsync(store.Id);
                if (existingStore != null)
                {
                    _context.Entry(existingStore).CurrentValues.SetValues(store);
                }
            }
            else
            {
                _context.Store.Add(store);
            }

            await _context.SaveChangesAsync();
            return store;
        }
    }
}
