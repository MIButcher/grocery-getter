using GroceryGetter.Models;

namespace GroceryGetter.DomainServices
{
    public interface IUserProductService
    {
        Task<UserProduct?> GetUserProductById(int userProductId);
        Task<UserProduct?> GetUserProductByProductId(int productId);
        Task<List<UserProduct>> GetUserProductsByUserId(int userId);
        Task<List<UserProduct>> GetAllUserProducts();
        Task<UserProduct> AddUserProduct(UserProduct userProduct);
    }
}
