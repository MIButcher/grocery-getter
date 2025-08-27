using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.AspNetCore.Mvc;

namespace GroceryGetter.Controllers
{
    [ApiController]
    [Route("api/aisleProducts")]
    public class AisleProductController : ControllerBase
    {
        private readonly IAisleProductService _aisleProductService;

        /// <summary>
        /// Initializes a new instance of the <see cref="AisleProductController"/> class.
        /// </summary>
        /// <param name="aisleProductService">Service for aisle-product operations.</param>
        public AisleProductController(IAisleProductService aisleProductService)
        {
            _aisleProductService = aisleProductService;
        }

        /// <summary>
        /// Retrieves an aisle-product entry by its unique identifier.
        /// </summary>
        /// <param name="aisleProductId">The ID of the aisle-product entry.</param>
        /// <returns>The aisle-product entry if found; otherwise, null.</returns>
        [HttpGet("{aisleProductId}", Name = "GetAisleProductById")]
        public async Task<AisleProduct?> GetAisleProduct(int aisleProductId)
        {
            return await _aisleProductService.GetAisleProductById(aisleProductId);
        }

        /// <summary>
        /// Retrieves the aisle-product entry associated with a specific product.
        /// </summary>
        /// <param name="productId">The ID of the product.</param>
        /// <returns>The aisle-product entry if found; otherwise, null.</returns>
        [HttpPost("aisleProduct/{productId}", Name = "GetAisleProductByProductId")]
        public async Task<AisleProduct?> GetAisleProductByProductId(int productId)
        {
            return await _aisleProductService.GetAisleProductByProductId(productId);
        }

        /// <summary>
        /// Retrieves all aisle-product entries associated with a specific aisle.
        /// </summary>
        /// <param name="aisleId">The ID of the aisle.</param>
        /// <returns>A list of aisle-product entries for the specified aisle.</returns>
        [HttpPost("aisleProducts/{aisleId}", Name = "GetAisleProductsByAisleId")]
        public async Task<IEnumerable<AisleProduct>> GetAisleProductsByAisleId(int aisleId)
        {
            return await _aisleProductService.GetAisleProductsByAisleId(aisleId);
        }

        /// <summary>
        /// Retrieves all aisle-product entries in the system.
        /// </summary>
        /// <returns>A list of all aisle-product entries.</returns>
        [HttpGet(Name = "GetAisleProducts")]
        public async Task<IEnumerable<AisleProduct>> GetAisleProducts()
        {
            return await _aisleProductService.GetAllAisleProducts();
        }

        /// <summary>
        /// Saves an aisle-product entry. Creates a new entry or updates an existing one.
        /// </summary>
        /// <param name="aisleProduct">The aisle-product entry to save.</param>
        /// <returns>The saved aisle-product entity.</returns>
        [HttpPost(Name = "SaveAisleProduct")]
        public async Task<AisleProduct> SaveAisleProduct(AisleProduct aisleProduct)
        {
            return await _aisleProductService.SaveAisleProduct(aisleProduct);
        }
    }
}
