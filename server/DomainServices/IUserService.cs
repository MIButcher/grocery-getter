using GroceryGetter.Models;

namespace GroceryGetter.DomainServices
{
    public interface IUserService
    {
        Task<User?> GetUserById(int userId);
        Task<List<User>> GetAllUsers();
        Task<User> AddUser(User user);
    }
}
