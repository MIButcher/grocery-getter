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

        public async Task<Product> SaveProduct(Product product)
        {
            var duplicate = await _context.Product
                .Where(p => p.Name.ToLower() == product.Name.ToLower() && p.Id != product.Id)
                .FirstOrDefaultAsync();

            if (duplicate != null)
            {
                throw new InvalidOperationException($"A product with the name '{product.Name}' already exists.");
            }

            if (product.Id > 0)
            {
                var existingProduct = await _context.Product.FindAsync(product.Id);
                if (existingProduct != null)
                {
                    _context.Entry(existingProduct).CurrentValues.SetValues(product);
                }
            }
            else
            {
                _context.Product.Add(product);
            }

            await _context.SaveChangesAsync();
            return product;
        }
    }
}
