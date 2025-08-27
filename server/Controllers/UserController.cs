using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.AspNetCore.Mvc;
using GroceryGetter.DomainServices.Models;

namespace GroceryGetter.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        /// <summary>
        /// Retrieves a user by their unique ID.
        /// </summary>
        /// <param name="userId">The ID of the user to retrieve.</param>
        /// <returns>The user object if found; otherwise, null.</returns>
        [HttpGet("{userId}", Name = "GetUserById")]
        public async Task<User?> GetUser(int userId)
        {
            return await _userService.GetUserById(userId);
        }

        /// <summary>
        /// Retrieves a list of users who have shared their list with the specified user.
        /// </summary>
        /// <param name="userId">The ID of the user to check shared lists for.</param>
        /// <returns>A list of user ID-name pairs.</returns>
        [HttpGet("shared/{userId}", Name = "GetSharedUsers")]
        public async Task<List<IdNameLink>> GetSharedUserIds(int userId)
        {
            return await _userService.GetSharedUserIds(userId);
        }

        /// <summary>
        /// Retrieves all users in the system.
        /// </summary>
        /// <returns>A list of all users.</returns>
        [HttpGet(Name = "GetUsers")]
        public async Task<IEnumerable<User>> GetUsers()
        {
            return await _userService.GetAllUsers();
        }

        /// <summary>
        /// Creates or updates a user. If the user ID exists, updates the user; otherwise, creates a new one.
        /// </summary>
        /// <param name="user">The user object to save.</param>
        /// <returns>The saved user object.</returns>
        [HttpPost(Name = "SaveUser")]
        public async Task<User> SaveUser(User user)
        {
            return await _userService.SaveUser(user);
        }

        /// <summary>
        /// Updates the list of users that the specified user has shared their list with.
        /// </summary>
        /// <param name="request">The share list request containing user ID and email list.</param>
        /// <returns>The updated user object if found; otherwise, null.</returns>
        [HttpPost("shareList", Name = "SaveUserShareList")]
        public async Task<User?> SaveUserShareList(UserListShareRequest request)
        {
            return await _userService.SaveUserShareList(request);
        }

        /// <summary>
        /// Authenticates a user based on email and password.
        /// </summary>
        /// <param name="loginUser">The user credentials for login.</param>
        /// <returns>The authenticated user object.</returns>
        /// <exception cref="UnauthorizedAccessException">Thrown when credentials are invalid.</exception>
        [HttpPost("login", Name = "LoginUser")]
        public async Task<User> Login([FromBody] User loginUser)
        {
            return await _userService.Login(loginUser);
        }
    }
}
