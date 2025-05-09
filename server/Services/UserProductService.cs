using GroceryGetter.Database;
using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.EntityFrameworkCore;

namespace GroceryGetter.Services
{
    public class UserProductService : IUserProductService
    {
        private readonly PgDbContext _context;

        public UserProductService(PgDbContext context)
        {
            _context = context;
        }

        public async Task<UserProduct?> GetUserProductById(int userProductId)
        {
            return await _context.UserProduct.FindAsync(userProductId);
        }

        public async Task<UserProduct?> GetUserProductByProductId(int productId)
        {
            return await _context.UserProduct
                .Where(up => up.ProductId == productId)
                .FirstOrDefaultAsync();
        }

        public async Task<List<UserProduct>> GetUserProductsByUserId(int userId)
        {
            return await _context.UserProduct
                .Where(up => up.UserId == userId)
                .ToListAsync();
        }

        public async Task<List<UserProduct>> GetAllUserProducts()
        {
            return await _context.UserProduct.ToListAsync();
        }

        public async Task<UserProduct> AddUserProduct(UserProduct userProduct)
        {
            _context.UserProduct.Add(userProduct);
            await _context.SaveChangesAsync();
            return userProduct;
        }
    }
}
