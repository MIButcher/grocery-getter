using GroceryGetter.DomainServices.Models;
using GroceryGetter.Models;
using Microsoft.AspNetCore.Mvc;

namespace GroceryGetter.DomainServices
{
    public interface IUserService
    {
        /// <summary>
        /// Retrieves a user by ID.
        /// </summary>
        Task<User?> GetUserById(int userId);

        /// <summary>
        /// Gets users who have shared their list with the specified user.
        /// </summary>
        Task<List<IdNameLink>> GetSharedUserIds(int userId);

        /// <summary>
        /// Retrieves all users.
        /// </summary>
        Task<List<User>> GetAllUsers();

        /// <summary>
        /// Saves or updates a user.
        /// </summary>
        Task<User> SaveUser(User user);

        /// <summary>
        /// Updates the shared list for a user.
        /// </summary>
        Task<User?> SaveUserShareList(UserListShareRequest request);

        /// <summary>
        /// Authenticates a user.
        /// </summary>
        Task<User> Login(User loginUser);
    }
}
