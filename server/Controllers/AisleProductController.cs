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

        public AisleProductController(IAisleProductService aisleProductService)
        {
            _aisleProductService = aisleProductService;
        }

        [HttpGet("{aisleProductId}", Name = "GetAisleProductById")]
        public async Task<IActionResult> GetAisleProduct(int aisleProductId)
        {
            var aisleProduct = await _aisleProductService.GetAisleProductById(aisleProductId);
            if (aisleProduct == null)
            {
                return NotFound();
            }
            return Ok(aisleProduct);
        }

        [HttpPost("aisleProduct/{productId}", Name = "GetAisleProductByProductId")]
        public async Task<IActionResult> GetAisleProductByProductId(int productId)
        {
            var aisleProduct = await _aisleProductService.GetAisleProductByProductId(productId);
            if (aisleProduct == null)
            {
                return NotFound();
            }
            return Ok(aisleProduct);
        }

        [HttpPost("aisleProducts/{aisleId}", Name = "GetAisleProductsByAisleId")]
        public async Task<IActionResult> GetAisleProductsByAisleId(int aisleId)
        {
            var aisleProduct = await _aisleProductService.GetAisleProductsByAisleId(aisleId);
            if (aisleProduct == null)
            {
                return NotFound();
            }
            return Ok(aisleProduct);
        }

        [HttpGet]
        public async Task<IActionResult> GetAisleProducts()
        {
            var aisleProducts = await _aisleProductService.GetAllAisleProducts();
            return Ok(aisleProducts);
        }

        [HttpPost]
        public async Task<IActionResult> AddAisleProduct(AisleProduct aisleProduct)
        {
            var createdAisleProduct = await _aisleProductService.AddAisleProduct(aisleProduct);
            return CreatedAtAction(nameof(GetAisleProducts), new { id = createdAisleProduct.Id }, createdAisleProduct);
        }
    }
}
