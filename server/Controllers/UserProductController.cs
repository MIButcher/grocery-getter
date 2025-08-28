using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.AspNetCore.Mvc;
using GroceryGetter.DomainServices.Models;

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

        /// <summary>
        /// Retrieves a specific UserProduct by its Id.
        /// </summary>
        /// <param name="userProductId">The Id of the UserProduct.</param>
        /// <returns>The UserProduct object.</returns>
        [HttpGet("userProduct/{userProductId}", Name = "GetUserProductById")]
        public async Task<UserProduct> GetUserProductById(int userProductId)
        {
            return await _userProductService.GetUserProductById(userProductId);
        }

        /// <summary>
        /// Retrieves a specific (non-hidden) UserProduct by its Id.
        /// </summary>
        /// <param name="userProductId">The Id of the UserProduct.</param>
        /// <returns>The UserProduct converted to a GroceryListItem object.</returns>
        [HttpGet("groceryListItem/{userProductId}", Name = "GetGroceryListItemById")]
        public async Task<GroceryListItem> GetGroceryListItemById(int userProductId)
        {
            return await _userProductService.GetGroceryListItemById(userProductId);
        }

        /// <summary>
        /// Retrieves a specific (non-hidden) UserProduct by the Product Id.
        /// </summary>
        /// <param name="productId">The Id of the Product.</param>
        /// <returns>The UserProduct object.</returns>
        [HttpPost("userProduct/product/{productId}", Name = "GetUserProductByProductId")]
        public async Task<UserProduct> GetUserProductByProductId(int productId)
        {
            return await _userProductService.GetUserProductByProductId(productId);
        }

        /// <summary>
        /// Retrieves a specific (non-hidden) UserProduct by the Product Id.
        /// </summary>
        /// <param name="productId">The Id of the Product.</param>
        /// <returns>The UserProduct converted to a GroceryListItem object.</returns>
        [HttpPost("groceryListItem/product/{productId}", Name = "GetGroceryListItemByProductId")]
        public async Task<GroceryListItem> GetGroceryListItemByProductId(int productId)
        {
            return await _userProductService.GetGroceryListItemByProductId(productId);
        }

        /// <summary>
        /// Retrieves a list of all UserProducts by the User Id.
        /// </summary>
        /// <param name="userId">The Id of the User.</param>
        /// <returns>A list of UserProduct objects.</returns>
        [HttpPost("userProducts/user/{userId}", Name = "GetUserProductsByUserId")]
        public async Task<IEnumerable<UserProduct>> GetUserProductsByUserId(int userId)
        {
            return await _userProductService.GetUserProductsByUserId(userId);
        }

        /// <summary>
        /// Retrieves a list of all (non-hidden) UserProducts by the User Id.
        /// </summary>
        /// <param name="userId">The Id of the User.</param>
        /// <returns>A list of UserProducts converted to GroceryListItem objects.</returns>
        [HttpPost("groceryListItems/user/{userId}", Name = "GetGroceryListItemsByUserId")]
        public async Task<IEnumerable<GroceryListItem>> GetGroceryListItemsByUserId(int userId)
        {
            return await _userProductService.GetGroceryListItemsByUserId(userId);
        }

        /// <summary>
        /// Retrieves a list of all UserProducts in the database (Likely for Admin use only).
        /// </summary>
        /// <returns>A list of UserProduct objects.</returns>
        [HttpGet("userProducts", Name = "GetUserProducts")]
        public async Task<IEnumerable<UserProduct>> GetUserProducts()
        {
            return await _userProductService.GetAllUserProducts();
        }

        /// <summary>
        /// Retrieves all data needed to insert a new Product, associated AisleProducts and UserProduct.
        /// </summary>
        /// <returns>A list of Stores, active Layouts associated with the Stores, and Aisles associated with the Layouts.</returns>
        [HttpGet("storeLayoutAisleData", Name = "GetAddNewUserProductData")]
        public async Task<StoreLayoutAisleData> GetAddNewUserProductData()
        {
            return await _userProductService.GetAddNewUserProductData();
        }

        /// <summary>
        /// Creates a new UserProduct or updates an existing UserProduct.
        /// </summary>
        /// <param name="userProduct">The UserProduct in need of saving.</param>
        /// <returns>The new or updated UserProduct object.</returns>
        [HttpPost("userProduct/save", Name = "SaveUserProduct")]
        public async Task<UserProduct> SaveUserProduct(UserProduct userProduct)
        {
            return await _userProductService.SaveUserProduct(userProduct);
        }

        /// <summary>
        /// Saves changes to a UserProduct's InCart, Quantity, Notes and IsFavorite properties.
        /// </summary>
        /// <param name="groceryListItem">The GroceryListItem in need of saving.</param>
        /// <returns>True or false.</returns>
        [HttpPost("groceryListItem", Name = "SaveGroceryListItem")]
        public async Task<bool> SaveGroceryListItem(GroceryListItem groceryListItem)
        {
            return await _userProductService.SaveGroceryListItem(groceryListItem);
        }

        /// <summary>
        /// Creates new (or unhides previously hidden) UserProducts (used to add Products to a User's GroceryListItems).
        /// </summary>
        /// <param name="userProductsCriteria">The current UserId, StoreId (if selected) and list of Product.Name.</param>
        /// <returns>A list of UserProducts converted to GroceryListItem objects.</returns>
        [HttpPost("userProducts/add", Name = "AddUserProducts")]
        public async Task<AddUserProductsResult> AddUserProducts(UserProductsCriteria userProductsCriteria)
        {
            return await _userProductService.AddUserProducts(userProductsCriteria);
        }

        /// <summary>
        /// Merges UserProducts from a shared list to the user's list.
        /// </summary>
        /// <param name="userProductsMergeCriteria">The current UserId, StoreId (if selected) and list of Products.</param>
        /// <returns>A list of UserProducts converted to GroceryListItem objects.</returns>
        [HttpPost("userProducts/merge", Name = "MergeUserProducts")]
        public async Task<List<GroceryListItem>> MergeUserProducts(UserProductsMergeCriteria userProductsMergeCriteria)
        {
            return await _userProductService.MergeUserProducts(userProductsMergeCriteria);
        }

        /// <summary>
        /// Inserts a new Product, associated AisleProducts (always an Alphabetical AisleProduct) and UserProduct.
        /// </summary>
        /// <param name="fullUserProductRequest">The current UserId, StoreId and Product and Aisle information.</param>
        /// <returns>AddUserProductsResult: A comma delimited list of unhandled Product names and a list of User Products converted to GroceryListItem objects.</returns>
        [HttpPost("userProduct/add", Name = "AddUserProduct")]
        public async Task<AddUserProductsResult> AddFullNewUserProduct(FullUserProductRequest fullUserProductRequest)
        {
            return await _userProductService.AddFullNewUserProduct(fullUserProductRequest);
        }

        /// <summary>
        /// Unhides UserProducts where IsFavorite is true.
        /// </summary>
        /// <param name="criteria">Criteria including UserId, StoreId ProductsList will not be populated here.</param>
        /// <returns>A list of UserProducts converted to GroceryListItem objects.</returns>
        [HttpPost("userProduct/addFavorites", Name = "AddFavoriteUserProducts")]
        public async Task<List<GroceryListItem>> AddFavoriteUserProducts(UserProductsCriteria criteria)
        {
            return await _userProductService.AddFavoriteUserProducts(criteria);
        }

        /// <summary>
        /// Deletes (or hides if IsFavorite) a UserProduct by its Id.
        /// </summary>
        /// <param name="userProductId">The Id of the UserProduct.</param>
        /// <returns></returns>
        [HttpDelete("userProduct/delete/{userProductId}", Name = "DeleteUserProduct")]
        public async Task DeleteUserProduct(int userProductId)
        {
            await _userProductService.DeleteUserProduct(userProductId);
        }

        /// <summary>
        /// Deletes (or hides if IsFavorite) all UserProducts linked to the User's Id.
        /// </summary>
        /// <param name="userId">The Id of the User.</param>
        /// <returns></returns>
        [HttpDelete("userProducts/deleteList/{userId}", Name = "DeleteGroceryList")]
        public async Task DeleteGroceryList(int userId)
        {
            await _userProductService.DeleteGroceryList(userId);
        }
    }
}
