using GroceryGetter.Models;

namespace GroceryGetter.DomainServices
{
    public interface IAisleService
    {
        /// <summary>
        /// Retrieves an aisle by its ID.
        /// </summary>
        /// <param name="aisleId">The ID of the aisle.</param>
        /// <returns>The aisle if found; otherwise, null.</returns>
        Task<Aisle?> GetAisleById(int aisleId);

        /// <summary>
        /// Retrieves all aisles associated with a specific layout.
        /// </summary>
        /// <param name="layoutId">The ID of the layout.</param>
        /// <returns>A list of aisles for the specified layout.</returns>
        Task<IEnumerable<Aisle>> GetAisleByLayoutId(int layoutId);

        /// <summary>
        /// Retrieves all aisles from the database.
        /// </summary>
        /// <returns>A list of all aisles.</returns>
        Task<IEnumerable<Aisle>> GetAllAisles();

        /// <summary>
        /// Saves an aisle to the database. Updates if the aisle exists, otherwise creates a new one.
        /// </summary>
        /// <param name="aisle">The aisle entity to save.</param>
        /// <returns>The saved aisle entity.</returns>
        /// <exception cref="InvalidOperationException">
        /// Thrown if a duplicate aisle name is found within the same layout.
        /// </exception>
        Task<Aisle> SaveAisle(Aisle aisle);
    }
}
