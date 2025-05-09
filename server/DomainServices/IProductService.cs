using GroceryGetter.Models;

namespace GroceryGetter.DomainServices
{
    public interface IProductService
    {
        Task<Product?> GetProductById(int productId);
        Task<List<Product>> GetAllProducts();
        Task<Product> AddProduct(Product product);
    }
}
