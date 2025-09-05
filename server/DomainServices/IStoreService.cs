using GroceryGetter.DomainServices.Models;
using GroceryGetter.Models;

namespace GroceryGetter.DomainServices
{
    public interface IStoreService
    {
        /// <summary>
        /// Retrieves a store by its ID.
        /// </summary>
        /// <param name="storeId">The ID of the store.</param>
        /// <returns>The store if found; otherwise, null.</returns>
        Task<Store?> GetStoreById(int storeId);

        /// <summary>
        /// Retrieves all stores from the database.
        /// </summary>
        /// <returns>A list of all stores.</returns>
        Task<List<Store>> GetAllStores();

        /// <summary>
        /// Retrieves all data needed to insert/update a Store's (Layout's) Aisle information (used in Admin area).
        /// </summary>
        /// <returns>A list of Stores, Layouts associated with the Stores, and Aisles associated with the Layouts.</returns>
        Task<StoreLayoutAisleData> GetStoreLayoutAisleData(bool isActiveLayout);

        /// <summary>
        /// Saves a store to the database. Updates if the store exists, otherwise creates a new one.
        /// </summary>
        /// <param name="store">The store entity to save.</param>
        /// <returns>The saved store entity.</returns>
        /// <exception cref="InvalidOperationException">Thrown if a duplicate store name is found.</exception>
        Task<Store> SaveStore(Store store);
    }
}
