using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.AspNetCore.Mvc;

namespace GroceryGetter.Controllers
{
    [ApiController]
    [Route("api/aisles")]
    public class AisleController : ControllerBase
    {
        private readonly IAisleService _aisleService;

        /// <summary>
        /// Initializes a new instance of the <see cref="AisleController"/> class.
        /// </summary>
        /// <param name="aisleService">Service for aisle operations.</param>
        public AisleController(IAisleService aisleService)
        {
            _aisleService = aisleService;
        }

        /// <summary>
        /// Retrieves an aisle by its unique identifier.
        /// </summary>
        /// <param name="aisleId">The ID of the aisle to retrieve.</param>
        /// <returns>The aisle if found; otherwise, null.</returns>
        [HttpGet("{aisleId}", Name = "GetAisleById")]
        public async Task<Aisle?> GetAisleById(int aisleId)
        {
            return await _aisleService.GetAisleById(aisleId);
        }

        /// <summary>
        /// Retrieves all aisles associated with a specific layout.
        /// </summary>
        /// <param name="layoutId">The ID of the layout.</param>
        /// <returns>A list of aisles for the specified layout.</returns>
        [HttpPost("{layoutId}", Name = "GetAisleByLayoutId")]
        public async Task<IEnumerable<Aisle>> GetAislesByLayoutId(int layoutId)
        {
            return await _aisleService.GetAisleByLayoutId(layoutId);
        }

        /// <summary>
        /// Retrieves all aisles in the system.
        /// </summary>
        /// <returns>A list of all aisles.</returns>
        [HttpGet(Name = "GetAisles")]
        public async Task<IEnumerable<Aisle>> GetAisles()
        {
            return await _aisleService.GetAllAisles();
        }

        /// <summary>
        /// Saves an aisle. Creates a new aisle or updates an existing one.
        /// </summary>
        /// <param name="aisle">The aisle to save.</param>
        /// <returns>The saved aisle entity.</returns>
        /// <exception cref="InvalidOperationException">
        /// Thrown if an aisle with the same name already exists in the layout.
        /// </exception>
        [HttpPost(Name = "SaveAisle")]
        public async Task<IEnumerable<Aisle>> SaveAisle(Aisle aisle)
        {
            return await _aisleService.SaveAisle(aisle);
        }
    }
}
