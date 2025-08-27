using GroceryGetter.Models;

namespace GroceryGetter.DomainServices
{
    public interface ILayoutService
    {
        /// <summary>
        /// Retrieves a layout by its ID.
        /// </summary>
        /// <param name="layoutId">The ID of the layout.</param>
        /// <returns>The layout if found; otherwise, null.</returns>
        Task<Layout?> GetLayoutById(int layoutId);

        /// <summary>
        /// Retrieves all layouts associated with a specific store.
        /// </summary>
        /// <param name="storeId">The ID of the store.</param>
        /// <returns>A list of layouts for the specified store.</returns>
        Task<List<Layout>> GetLayoutsByStoreId(int storeId);

        /// <summary>
        /// Retrieves all layouts from the database.
        /// </summary>
        /// <returns>A list of all layouts.</returns>
        Task<List<Layout>> GetAllLayouts();

        /// <summary>
        /// Saves a layout to the database. Updates if the layout exists, otherwise creates a new one.
        /// </summary>
        /// <param name="layout">The layout entity to save.</param>
        /// <returns>The saved layout entity.</returns>
        /// <exception cref="InvalidOperationException">
        /// Thrown if a duplicate layout name is found for the same store.
        /// </exception>
        Task<Layout> SaveLayout(Layout layout);
    }
}
