using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.AspNetCore.Mvc;
using NpgsqlTypes;

namespace GroceryGetter.Controllers
{
    [ApiController]
    [Route("api/userProducts")]
    public class UserProductController : ControllerBase
    {
        private readonly IUserProductService _userProductService;

        public UserProductController(IUserProductService userProductService)
        {
            _userProductService = userProductService;
        }

        [HttpGet("{userProductId}", Name = "GetUserProductById")]
        public async Task<IActionResult> GetUserProduct(int userProductId)
        {
            var userProduct = await _userProductService.GetUserProductById(userProductId);
            if (userProduct == null)
            {
                return NotFound();
            }
            return Ok(userProduct);
        }

        [HttpGet("{productId}", Name = "GetUserProductByProductId")]
        public async Task<IActionResult> GetUserProductByProductId(int productId)
        {
            var userProduct = await _userProductService.GetUserProductByProductId(productId);
            if (userProduct == null)
            {
                return NotFound();
            }
            return Ok(userProduct);
        }

        [HttpPost("{userId}", Name = "GetUserProductsByUserId")]
        public async Task<IActionResult> GetUserProductsByUserId(int userId)
        {
            var userProducts = await _userProductService.GetUserProductsByUserId(userId);
            return Ok(userProducts);
        }

        [HttpGet]
        public async Task<IActionResult> GetUserProducts()
        {
            var userProducts = await _userProductService.GetAllUserProducts();
            return Ok(userProducts);
        }

        [HttpPost]
        public async Task<IActionResult> AddUserProduct(UserProduct userProduct)
        {
            var createdUserProduct = await _userProductService.AddUserProduct(userProduct);
            return CreatedAtAction(nameof(GetUserProducts), new { id = createdUserProduct.Id }, createdUserProduct);
        }
    }
}
