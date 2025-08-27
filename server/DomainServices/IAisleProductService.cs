using GroceryGetter.Models;

namespace GroceryGetter.DomainServices
{
    public interface IAisleProductService
    {
        /// <summary>
        /// Retrieves an aisle-product entry by its ID.
        /// </summary>
        /// <param name="aisleProductId">The ID of the aisle-product entry.</param>
        /// <returns>The aisle-product entry if found; otherwise, null.</returns>
        Task<AisleProduct?> GetAisleProductById(int aisleProductId);

        /// <summary>
        /// Retrieves the aisle-product entry associated with a specific product.
        /// </summary>
        /// <param name="productId">The ID of the product.</param>
        /// <returns>The aisle-product entry if found; otherwise, null.</returns>
        Task<AisleProduct?> GetAisleProductByProductId(int productId);

        /// <summary>
        /// Retrieves all aisle-product entries associated with a specific aisle.
        /// </summary>
        /// <param name="aisleId">The ID of the aisle.</param>
        /// <returns>A list of aisle-product entries for the specified aisle.</returns>
        Task<List<AisleProduct>> GetAisleProductsByAisleId(int aisleId);

        /// <summary>
        /// Retrieves all aisle-product entries from the database.
        /// </summary>
        /// <returns>A list of all aisle-product entries.</returns>
        Task<List<AisleProduct>> GetAllAisleProducts();

        /// <summary>
        /// Saves an aisle-product entry to the database. Updates if the entry exists, otherwise creates a new one.
        /// </summary>
        /// <param name="aisleProduct">The aisle-product entity to save.</param>
        /// <returns>The saved aisle-product entity.</returns>
        Task<AisleProduct> SaveAisleProduct(AisleProduct aisleProduct);
    }
}
