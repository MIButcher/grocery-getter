using GroceryGetter.Database;
using GroceryGetter.Models;
using GroceryGetter.DomainServices; // Updated namespace
using Microsoft.EntityFrameworkCore;
using System.Runtime.InteropServices;

namespace GroceryGetter.Services
{
    public class LayoutService : ILayoutService
    {
        private readonly PgDbContext _context;

        public LayoutService(PgDbContext context)
        {
            _context = context;
        }

        public async Task<Layout?> GetLayoutById(int layoutId)
        {
            return await _context.Layout.FindAsync(layoutId);
        }

        public async Task<List<Layout>> GetLayoutsByStoreId(int storeId)
        {
            return await _context.Layout
                .Where(l => l.StoreId == storeId)
                .ToListAsync();
        }

        public async Task<List<Layout>> GetAllLayouts()
        {
            return await _context.Layout.ToListAsync();
        }

        public async Task<Layout> SaveLayout(Layout layout)
        {
            var duplicate = await _context.Layout
                .Where(l => l.StoreId == layout.StoreId && l.Name == layout.Name && l.Id != layout.Id)
                .FirstOrDefaultAsync();

            if (duplicate != null)
            {
                throw new InvalidOperationException("A layout with this name already exists for the store.");
            }

            if (layout.Id > 0)
            {
                var existingLayout = await _context.Layout.FindAsync(layout.Id);
                if (existingLayout != null)
                {
                    _context.Entry(existingLayout).CurrentValues.SetValues(layout);
                }
            }
            else
            {
                // Only one active layout per store—deactivate others
                if (layout.IsActive)
                {
                    var activeLayouts = await _context.Layout
                        .Where(l => l.StoreId == layout.StoreId && l.IsActive)
                        .ToListAsync();

                    foreach (var l in activeLayouts)
                    {
                        l.IsActive = false;
                    }
                }

                var layoutToAdd = new Layout
                {
                    StoreId = layout.StoreId,
                    Name = layout.Name,
                    IsActive = layout.IsActive,
                };

                _context.Layout.Add(layoutToAdd);
            }

            await _context.SaveChangesAsync();
            return layout;
        }
    }
}
