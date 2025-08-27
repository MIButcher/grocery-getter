using GroceryGetter.Models;
using GroceryGetter.Database;

namespace GroceryGetter.Tests.Integration.Utilities
{
    public class TestDataBuilder
    {
        private readonly PgDbContext _context;

        public TestDataBuilder(PgDbContext context)
        {
            _context = context;
        }

        public async Task<Store> CreateStoreAsync(string name = "Test Store")
        {
            var store = new Store
            {
                Name = name,
                Address = "123 Main St",
                City = "De Pere",
                State = "WI",
                ZipCode = "54115",
                PhoneNumber = "9205551234"
            };

            _context.Store.Add(store);
            await _context.SaveChangesAsync();
            return store;
        }

        public async Task<Layout> CreateLayoutAsync(Store store, string name = "Default Layout")
        {
            var layout = new Layout
            {
                StoreId = store.Id,
                Name = name,
                IsActive = true
            };

            _context.Layout.Add(layout);
            await _context.SaveChangesAsync();
            return layout;
        }

        public async Task<Aisle> CreateAisleAsync(Layout layout, string name = "Aisle 1", int lineup = 1)
        {
            var aisle = new Aisle
            {
                LayoutId = layout.Id,
                Name = name,
                Lineup = lineup
            };

            _context.Aisle.Add(aisle);
            await _context.SaveChangesAsync();
            return aisle;
        }

        public async Task<Product> CreateProductAsync(string name = "Milk")
        {
            var product = new Product
            {
                Name = name
            };

            _context.Product.Add(product);
            await _context.SaveChangesAsync();
            return product;
        }

        public async Task<AisleProduct> CreateAisleProductAsync(Product product, Aisle aisle)
        {
            var aisleProduct = new AisleProduct
            {
                ProductId = product.Id,
                AisleId = aisle.Id
            };

            _context.AisleProduct.Add(aisleProduct);
            await _context.SaveChangesAsync();
            return aisleProduct;
        }

        public async Task<User> CreateUserAsync(string email = "test@example.com")
        {
            var user = new User
            {
                FirstName = "Test",
                LastName = "User",
                Email = email,
                Password = "hashed_password"
            };

            _context.User.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<UserProduct> CreateUserProductAsync(User user, Product product, bool inCart = false, int quantity = 1)
        {
            var userProduct = new UserProduct
            {
                UserId = user.Id,
                ProductId = product.Id,
                InCart = inCart,
                Quantity = quantity,
                Notes = "Test note"
            };

            _context.UserProduct.Add(userProduct);
            await _context.SaveChangesAsync();
            return userProduct;
        }
    }
}
