using GroceryGetter.Database;
using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.EntityFrameworkCore;
using GroceryGetter.DomainServices.Models;

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

        public async Task<StoreLayoutAisleData> GetStoreLayoutAisleData(bool isActiveLayout)
        {
            var stores = await _context.Store
                .Where(s => s.Name != "Alphabetical")
                .ToArrayAsync();

            var layouts = isActiveLayout ?
                await _context.Layout
                .Where(l => l.IsActive && l.Name != "Alphabetical-A-Z")
                .ToArrayAsync() :
                await _context.Layout
                .Where(l => l.Name != "Alphabetical-A-Z")
                .ToArrayAsync();

            var layoutIds = layouts.Select(l => l.Id).ToList();

            var aisles = await _context.Aisle
                .Where(a => layoutIds.Contains(a.LayoutId))
                .ToArrayAsync();

            return new StoreLayoutAisleData
            {
                Stores = stores,
                Layouts = layouts,
                Aisles = aisles
            };
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
