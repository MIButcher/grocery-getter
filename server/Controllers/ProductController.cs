using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.AspNetCore.Mvc;

namespace GroceryGetter.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductController : ControllerBase
    {
        private readonly IProductService _productService;

        /// <summary>
        /// Initializes a new instance of the <see cref="ProductController"/> class.
        /// </summary>
        /// <param name="productService">Service for product operations.</param>
        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        /// <summary>
        /// Retrieves a product by its unique identifier.
        /// </summary>
        /// <param name="productId">The ID of the product to retrieve.</param>
        /// <returns>The product if found; otherwise, null.</returns>
        [HttpGet("{productId}", Name = "GetProductById")]
        public async Task<Product?> GetProduct([FromRoute] int productId)
        {
            var product = await _productService.GetProductById(productId);
            return product;
        }

        /// <summary>
        /// Retrieves all products.
        /// </summary>
        /// <returns>A list of all products.</returns>
        [HttpGet(Name = "GetProducts")]
        public async Task<List<Product>> GetProducts()
        {
            var products = await _productService.GetAllProducts();
            return products;
        }

        /// <summary>
        /// Saves a product. Creates a new product or updates an existing one.
        /// </summary>
        /// <param name="product">The product to save.</param>
        /// <returns>The saved product entity.</returns>
        /// <exception cref="InvalidOperationException">Thrown if a product with the same name already exists.</exception>
        [HttpPost(Name = "SaveProduct")]
        public async Task<Product> SaveProduct(Product product)
        {
            var savedProduct = await _productService.SaveProduct(product);
            return savedProduct;
        }
    }
}
