using GroceryGetter.Database;
using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.EntityFrameworkCore;
using GroceryGetter.DomainServices.Models;
using BCrypt.Net;
using Microsoft.AspNetCore.Mvc;

namespace GroceryGetter.Services
{
    public class UserService : IUserService
    {
        private readonly PgDbContext _context;

        public UserService(PgDbContext context)
        {
            _context = context;
        }

        public async Task<User?> GetUserById(int userId)
        {
            return await _context.User.FindAsync(userId);
        }

        public async Task<List<IdNameLink>> GetSharedUserIds(int userId)
        {
            return await _context.User
                .Where(u => u.SharedListUserIds.Contains(userId))
                .Select(u => new IdNameLink
                {
                    Id = u.Id,
                    Name = u.FirstName + " " + u.LastName
                }).ToListAsync();
        }

        public async Task<List<User>> GetAllUsers()
        {
            return await _context.User.ToListAsync();
        }

        public async Task<User> SaveUser(User user)
        {
            var duplicateUser = await _context.User
                .Where(u => u.Email == user.Email && u.Id != user.Id)
                .FirstOrDefaultAsync();

            if (duplicateUser != null)
            {
                throw new InvalidOperationException("A user with this email already exists.");
            }

            if (user.Id > 0)
            {
                var existingUser = await _context.User.FindAsync(user.Id);
                if (existingUser != null)
                {
                    _context.Entry(existingUser).CurrentValues.SetValues(user);
                }
            }
            else
            {
                user.Password = BCrypt.Net.BCrypt.HashPassword(user.Password);
                _context.User.Add(user);
            }

            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<User?> SaveUserShareList(UserListShareRequest request)
        {
            var existingUser = await _context.User.FindAsync(request.UserId);
            if (existingUser != null)
            {
                var sharedListUserIds = await _context.User
                    .Where(u => request.EmailString.Contains(u.Email))
                    .Select(u => u.Id)
                    .ToArrayAsync();
                existingUser.SharedListUserIds = sharedListUserIds;
                await _context.SaveChangesAsync();
            }

            return existingUser;
        }

        public async Task<User> Login(User loginUser)
        {
            var users = await _context.User.ToListAsync();
            var matchedUser = users.FirstOrDefault(u =>
                u.Email.ToLower() == loginUser.Email.ToLower());
            var passwordVerified = BCrypt.Net.BCrypt.Verify(loginUser.Password, matchedUser.Password);

            if (matchedUser == null || !passwordVerified)
            {
                throw new UnauthorizedAccessException("User is not authorized.");
            }

            return matchedUser;
        }
    }
}
