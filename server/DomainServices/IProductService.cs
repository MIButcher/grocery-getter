using GroceryGetter.Models;

namespace GroceryGetter.DomainServices
{
    public interface IProductService
    {
        /// <summary>
        /// Retrieves a product by its ID.
        /// </summary>
        /// <param name="productId">The ID of the product.</param>
        /// <returns>The product if found; otherwise, null.</returns>
        Task<Product?> GetProductById(int productId);

        /// <summary>
        /// Retrieves all products from the database.
        /// </summary>
        /// <returns>A list of all products.</returns>
        Task<List<Product>> GetAllProducts();

        /// <summary>
        /// Saves a product to the database. Updates if the product exists, otherwise creates a new one.
        /// </summary>
        /// <param name="product">The product entity to save.</param>
        /// <returns>The saved product entity.</returns>
        /// <exception cref="InvalidOperationException">Thrown if a duplicate product name is found.</exception>
        Task<Product> SaveProduct(Product product);
    }
}
