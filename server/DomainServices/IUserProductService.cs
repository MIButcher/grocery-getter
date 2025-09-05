using GroceryGetter.DomainServices.Models;
using GroceryGetter.Models;

namespace GroceryGetter.DomainServices
{
    /// <summary>
    /// Service interface for managing UserProduct and GroceryListItem operations.
    /// </summary>
    public interface IUserProductService
    {
        /// <summary>
        /// Retrieves a specific UserProduct by its Id.
        /// </summary>
        /// <param name="userProductId">The Id of the UserProduct.</param>
        /// <returns>The UserProduct object, or null if not found.</returns>
        Task<UserProduct?> GetUserProductById(int userProductId);

        /// <summary>
        /// Retrieves a specific (non-hidden) UserProduct by its Id.
        /// </summary>
        /// <param name="userProductId">The Id of the UserProduct.</param>
        /// <returns>The UserProduct converted to a GroceryListItem object.</returns>
        Task<GroceryListItem?> GetGroceryListItemById(int userProductId);

        /// <summary>
        /// Retrieves a specific (non-hidden) UserProduct by the Product Id.
        /// </summary>
        /// <param name="productId">The Id of the Product.</param>
        /// <returns>The UserProduct object, or null if not found.</returns>
        Task<UserProduct?> GetUserProductByProductId(int productId);

        /// <summary>
        /// Retrieves a specific (non-hidden) UserProduct by the Product Id.
        /// </summary>
        /// <param name="productId">The Id of the Product.</param>
        /// <returns>The GroceryListItem object, or null if not found.</returns>
        Task<GroceryListItem?> GetGroceryListItemByProductId(int productId);

        /// <summary>
        /// Retrieves all UserProducts associated with a specific User Id.
        /// </summary>
        /// <param name="userId">The Id of the User.</param>
        /// <returns>A list of UserProduct objects.</returns>
        Task<List<UserProduct>> GetUserProductsByUserId(int userId);

        /// <summary>
        /// Retrieves all (non-hidden) GroceryListItems associated with a specific User Id.
        /// </summary>
        /// <param name="userId">The Id of the User.</param>
        /// <returns>A list of GroceryListItem objects.</returns>
        Task<List<GroceryListItem>> GetGroceryListItemsByUserId(int userId);

        /// <summary>
        /// Retrieves all UserProducts in the system.
        /// </summary>
        /// <returns>A list of all UserProduct objects.</returns>
        Task<List<UserProduct>> GetAllUserProducts();

        ///// <summary>
        ///// Retrieves all data needed to insert a new Product, associated AisleProducts, and UserProduct.
        ///// </summary>
        ///// <returns>StoreLayoutAisleData containing Stores, Layouts, and Aisles.</returns>
        //Task<StoreLayoutAisleData> GetAddNewUserProductData();

        /// <summary>
        /// Saves a new or existing UserProduct.
        /// </summary>
        /// <param name="userProduct">The UserProduct to save.</param>
        /// <returns>The saved UserProduct object.</returns>
        Task<UserProduct> SaveUserProduct(UserProduct userProduct);

        /// <summary>
        /// Saves changes to a UserProduct's InCart, Quantity, Notes and IsFavorite properties.
        /// </summary>
        /// <param name="groceryListItem">The GroceryListItem to save.</param>
        /// <returns>True if save was successful; otherwise, false.</returns>
        Task<bool> SaveGroceryListItem(GroceryListItem groceryListItem);

        /// <summary>
        /// Creates new (or unhides previously hidden) UserProducts (used to add Products to a User's GroceryListItems).
        /// </summary>
        /// <param name="userProductsCriteria">Criteria including UserId, StoreId, and Product names.</param>
        /// <returns>Result containing created GroceryListItems and any unhandled Product names.</returns>
        Task<AddUserProductsResult> AddUserProducts(UserProductsCriteria userProductsCriteria);

        /// <summary>
        /// Merges UserProducts from a shared list into the user's list.
        /// </summary>
        /// <param name="userProductsMergeCriteria">Criteria including UserId, StoreId, and Products.</param>
        /// <returns>A list of merged GroceryListItem objects.</returns>
        Task<List<GroceryListItem>> MergeUserProducts(UserProductsMergeCriteria userProductsMergeCriteria);

        /// <summary>
        /// Inserts a new Product, associated AisleProducts, and UserProduct.
        /// </summary>
        /// <param name="fullUserProductRequest">Request containing UserId, StoreId, Product, and Aisle data.</param>
        /// <returns>Result containing created GroceryListItems and any unhandled Product names.</returns>
        Task<AddUserProductsResult> AddFullNewUserProduct(FullUserProductRequest fullUserProductRequest);

        /// <summary>
        /// Unhides UserProducts where IsFavorite is true.
        /// </summary>
        /// <param name="criteria">Criteria including UserId, StoreId ProductsList will not be populated here.</param>
        /// <returns>A list of UserProducts converted to GroceryListItem objects.</returns>
        Task<List<GroceryListItem>> AddFavoriteUserProducts(UserProductsCriteria criteria);

        /// <summary>
        /// Creates new (or unhides previously hidden) UserProducts (used to add Products to a User's GroceryListItems).
        /// </summary>
        /// <param name="userProductId">The Id of the UserProduct to delete.</param>
        Task DeleteUserProduct(int userProductId);

        /// <summary>
        /// Deletes (or hides if IsFavorite) all UserProducts linked to the User's Id.
        /// </summary>
        /// <param name="userId">The Id of the User.</param>
        Task DeleteGroceryList(int userId);
    }

}
