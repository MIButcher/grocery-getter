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

        public async Task<Layout> AddLayout(Layout layout)
        {
            _context.Layout.Add(layout);
            await _context.SaveChangesAsync();
            return layout;
        }
    }
}
