using GroceryGetter.Database;
using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.EntityFrameworkCore;

namespace GroceryGetter.Services
{
    public class AisleProductService : IAisleProductService
    {
        private readonly PgDbContext _context;

        public AisleProductService(PgDbContext context)
        {
            _context = context;
        }

        public async Task<AisleProduct?> GetAisleProductById(int aisleProductId)
        {
            return await _context.AisleProduct.FindAsync(aisleProductId);
        }

        public async Task<List<AisleProduct>> GetAisleProductsByAisleId(int aisleId)
        {
            return await _context.AisleProduct
                .Where(a => a.AisleId == aisleId)
                .ToListAsync();
        }

        public async Task<List<AisleProduct>> GetAllAisleProducts()
        {
            return await _context.AisleProduct.ToListAsync();
        }

        public async Task<AisleProduct> AddAisleProduct(AisleProduct aisleProduct)
        {
            _context.AisleProduct.Add(aisleProduct);
            await _context.SaveChangesAsync();
            return aisleProduct;
        }
    }
}
