using GroceryGetter.Database;
using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.EntityFrameworkCore;

namespace GroceryGetter.Services
{
    public class ProductService : IProductService
    {
        private readonly PgDbContext _context;

        public ProductService(PgDbContext context)
        {
            _context = context;
        }

        public async Task<Product?> GetProductById(int productId)
        {
            return await _context.Product.FindAsync(productId);
        }

        public async Task<List<Product>> GetAllProducts()
        {
            return await _context.Product.ToListAsync();
        }

        public async Task<Product> AddProduct(Product product)
        {
            _context.Product.Add(product);
            await _context.SaveChangesAsync();
            return product;
        }
    }
}
