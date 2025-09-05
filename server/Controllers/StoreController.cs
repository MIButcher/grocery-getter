using GroceryGetter.Models;
using GroceryGetter.DomainServices; // Updated namespace
using Microsoft.AspNetCore.Mvc;
using GroceryGetter.DomainServices.Models;
using GroceryGetter.Services;

namespace GroceryGetter.Controllers
{

    [ApiController]
    [Route("api/stores")]
    public class StoreController : ControllerBase
    {
        private readonly IStoreService _storeService;

        /// <summary>
        /// Initializes a new instance of the <see cref="StoreController"/> class.
        /// </summary>
        /// <param name="storeService">Service for store operations.</param>
        public StoreController(IStoreService storeService)
        {
            _storeService = storeService;
        }

        /// <summary>
        /// Retrieves a store by its unique identifier.
        /// </summary>
        /// <param name="storeId">The ID of the store to retrieve.</param>
        /// <returns>The store if found; otherwise, null.</returns>
        [HttpGet("{storeId}", Name = "GetStoreById")]
        public async Task<Store?> GetStore(int storeId)
        {
            return await _storeService.GetStoreById(storeId);
        }

        /// <summary>
        /// Retrieves all stores.
        /// </summary>
        /// <returns>A list of all stores.</returns>
        [HttpGet(Name = "GetStores")]
        public async Task<IEnumerable<Store>> GetStores()
        {
            return await _storeService.GetAllStores();
        }

        /// <summary>
        /// Retrieves all data needed to insert/update a Store's (Layout's) Aisle information (used in Admin area).
        /// </summary>
        /// <returns>A list of Stores, active Layouts associated with the Stores, and Aisles associated with the Layouts.</returns>
        [HttpGet("storeLayoutAisle/{isActiveLayout}", Name = "GetStoreLayoutAisleData")]
        public async Task<StoreLayoutAisleData> GetStoreLayoutAisleData(bool isActiveLayout)
        {
            return await _storeService.GetStoreLayoutAisleData(isActiveLayout);
        }

        /// <summary>
        /// Saves a store. Creates a new store or updates an existing one.
        /// </summary>
        /// <param name="store">The store to save.</param>
        /// <returns>The saved store entity.</returns>
        /// <exception cref="InvalidOperationException">Thrown if a store with the same name already exists.</exception>
        [HttpPost(Name = "SaveStore")]
        public async Task<Store> SaveStore(Store store)
        {
            return await _storeService.SaveStore(store);
        }
    }
}