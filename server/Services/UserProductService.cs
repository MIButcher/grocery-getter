using GroceryGetter.Database;
using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.EntityFrameworkCore;
using GroceryGetter.DomainServices.Models;
using Npgsql;
using System.Text.RegularExpressions;

namespace GroceryGetter.Services
{
    public class UserProductService : IUserProductService
    {
        private readonly PgDbContext _context;

        public UserProductService(PgDbContext context)
        {
            _context = context;
        }

        public async Task<UserProduct?> GetUserProductById(int userProductId)
        {
            return await _context.UserProduct.FindAsync(userProductId);
        }

        public async Task<GroceryListItem?> GetGroceryListItemById(int userProductId)
        {
            return await _context.UserProduct
                .Include(up => up.Product)
                .Where(up => up.Id == userProductId && !up.IsHidden)
                .Select(up => new GroceryListItem
                {
                    UserProductId = up.Id,
                    ProductName = up.Product.Name,
                    Quantity = up.Quantity,
                    Notes = up.Notes,
                    InCart = up.InCart
                }).FirstOrDefaultAsync();
        }

        public async Task<UserProduct?> GetUserProductByProductId(int productId)
        {
            return await _context.UserProduct
                .Where(up => up.ProductId == productId && !up.IsHidden)
                .FirstOrDefaultAsync();
        }

        public async Task<GroceryListItem?> GetGroceryListItemByProductId(int productId)
        {
            return await _context.UserProduct
                .Include(up => up.Product)
                .Where(up => up.ProductId == productId && !up.IsHidden)
                .Select(up => new GroceryListItem
                {
                    UserProductId = up.Id,
                    ProductName = up.Product.Name,
                    Quantity = up.Quantity,
                    Notes = up.Notes,
                    InCart = up.InCart
                }).FirstOrDefaultAsync();
        }

        public async Task<List<UserProduct>> GetUserProductsByUserId(int userId)
        {
            return await _context.UserProduct
                .Where(up => up.UserId == userId)
                .ToListAsync();
        }

        public async Task<List<GroceryListItem>> GetGroceryListItemsByUserId(int userId)
        {
            var sql = "SELECT * FROM get_grocery_list_items(@p_user_id, @p_store_id);";
            var userIdParam = new NpgsqlParameter("p_user_id", userId);
            var storeIdParam = new NpgsqlParameter("p_store_id", 1);
            var results = await _context.GroceryListItem
                .FromSqlRaw(sql, userIdParam, storeIdParam)
                .ToListAsync();
            return results.FindAll(r => !r.IsHidden);
        }

        public async Task<List<UserProduct>> GetAllUserProducts()
        {
            return await _context.UserProduct.ToListAsync();
        }

        public async Task<UserProduct> SaveUserProduct(UserProduct userProduct)
        {
            if (userProduct.Id > 0)
            {
                var existinguserProduct = await _context.UserProduct.FindAsync(userProduct.Id);
                if (existinguserProduct != null)
                {
                    _context.Entry(existinguserProduct).CurrentValues.SetValues(userProduct);
                }
            }
            else
            {
                var userProductToAdd = new UserProduct
                {
                    UserId = userProduct.UserId,
                    ProductId = userProduct.ProductId,
                    InCart = userProduct.InCart,
                    Quantity = userProduct.Quantity,
                    Notes = userProduct.Notes,
                    IsFavorite = userProduct.IsFavorite,
                    IsHidden = userProduct.IsHidden
                };

                _context.UserProduct.Add(userProductToAdd);
            }

            await _context.SaveChangesAsync();
            return userProduct;
        }

        public async Task<bool> SaveGroceryListItem(GroceryListItem groceryListItem)
        {
            if (groceryListItem.UserProductId > 0)
            {
                var existingUserProduct = await _context.UserProduct.FindAsync(groceryListItem.UserProductId);
                if (existingUserProduct != null)
                {
                    existingUserProduct.InCart = groceryListItem.InCart;
                    existingUserProduct.Quantity = groceryListItem.Quantity;
                    existingUserProduct.Notes = groceryListItem.Notes;
                    existingUserProduct.IsFavorite = groceryListItem.IsFavorite;

                    await _context.SaveChangesAsync();
                    return true;
                }
            }
            return false;
        }

        public async Task<AddUserProductsResult> AddUserProducts(UserProductsCriteria userProductsCriteria)
        {
            string unhandledProducts = "";

            if (!string.IsNullOrWhiteSpace(userProductsCriteria.ProductsList))
            {
                var hiddenUserProducts = await _context.UserProduct
                    .Where(up => up.IsHidden)
                    .ToListAsync();
                var hiddenIds = hiddenUserProducts.Select(h => h.ProductId).ToList();

                // Parse input string into structured entries
                var parsedEntries = userProductsCriteria.ProductsList
                    .Split(',', StringSplitOptions.RemoveEmptyEntries)
                    .Select(entry => entry.Trim())
                    .Where(entry => !string.IsNullOrWhiteSpace(entry))
                    .Select(entry =>
                    {
                        int quantity = 1;
                        string name = entry;
                        string? notes = null;

                        // Extract quantity if it starts with a number
                        var quantityMatch = Regex.Match(entry, @"^(\d+)\s+");
                        if (quantityMatch.Success)
                        {
                            quantity = int.Parse(quantityMatch.Groups[1].Value);
                            entry = entry.Substring(quantityMatch.Length).Trim();
                        }

                        // Find last set of parentheses - treat as notes
                        int lastOpen = entry.LastIndexOf('(');
                        int lastClose = entry.LastIndexOf(')');
                        if (lastOpen >= 0 && lastClose > lastOpen)
                        {
                            notes = entry.Substring(lastOpen + 1, lastClose - lastOpen - 1).Trim();
                            if (notes.Length > 250) notes = notes.Substring(0, 250);
                            name = entry.Substring(0, lastOpen).Trim();
                        }
                        else
                        {
                            name = entry.Trim();
                        }

                        return new
                        {
                            Quantity = quantity,
                            Name = name.ToLower(),
                            Notes = notes,
                            OriginalEntry = entry.ToLower()
                        };
                    })
                    .ToList();

                var productNames = parsedEntries.Select(p => p.Name).ToList();

                var allProductNames = parsedEntries
                    .SelectMany(e => new[] { e.Name, e.OriginalEntry })
                    .Distinct()
                    .ToList();

                var products = await _context.Product
                    .Where(p => allProductNames.Contains(p.Name.ToLower()))
                    .ToListAsync();

                var matchedProducts = new List<(Product product, dynamic entry)>();

                foreach (var entry in parsedEntries)
                {
                    var product = products.FirstOrDefault(p => p.Name.ToLower() == entry.Name);
                    var effectiveEntry = entry;

                    // Fallback: try matching full entry including parentheses
                    if (product == null && entry.Notes != null)
                    {
                        string fallbackName = $"{entry.Name} ({entry.Notes})".ToLower();
                        product = products.FirstOrDefault(p => p.Name.ToLower() == fallbackName);

                        if (product != null)
                        {
                            effectiveEntry = new
                            {
                                entry.Quantity,
                                Name = fallbackName,
                                Notes = (string?)null,
                                OriginalEntry = fallbackName
                            };
                        }
                    }

                    if (product == null) continue;

                    matchedProducts.Add((product, effectiveEntry));
                    productNames.Remove(product.Name.ToLower());
                }

                foreach (var (product, entry) in matchedProducts)
                {
                    var hiddenUserProduct = hiddenUserProducts.FirstOrDefault(h => h.ProductId == product.Id);
                    bool shouldAddNew = hiddenUserProduct == null;

                    if (hiddenUserProduct != null)
                    {
                        bool notesMatch = string.Equals(
                            hiddenUserProduct.Notes?.Trim(),
                            entry.Notes?.Trim(),
                            StringComparison.OrdinalIgnoreCase
                        );

                        if (notesMatch)
                        {
                            hiddenUserProduct.IsHidden = false;
                        }
                        else
                        {
                            shouldAddNew = true;
                        }
                    }

                    if (shouldAddNew)
                    {
                        var userProduct = new UserProduct()
                        {
                            UserId = userProductsCriteria.UserId,
                            ProductId = product.Id,
                            InCart = false,
                            Quantity = entry.Quantity,
                            Notes = entry.Notes
                        };
                        _context.UserProduct.Add(userProduct);
                    }
                }

                await _context.SaveChangesAsync();
                unhandledProducts = string.Join(", ", productNames);
            }

            var sql = "SELECT * FROM get_grocery_list_items(@p_user_id, @p_store_id);";
            var userIdParam = new NpgsqlParameter("p_user_id", userProductsCriteria.UserId);
            var storeIdParam = new NpgsqlParameter("p_store_id", userProductsCriteria.StoreId ?? 1);
            var results = await _context.GroceryListItem
                .FromSqlRaw(sql, userIdParam, storeIdParam)
                .ToListAsync();

            return new AddUserProductsResult()
            {
                UnhandledProductsList = unhandledProducts,
                GroceryListItems = results.FindAll(r => !r.IsHidden)
            };
        }

        public async Task<List<GroceryListItem>> MergeUserProducts(UserProductsMergeCriteria userProductsMergeCriteria)
        {
            if (userProductsMergeCriteria.GroceryListItems.Count() > 0)
            {
                var userProductIds = userProductsMergeCriteria.GroceryListItems
                    .Where(item => !item.IsHidden)
                    .Select(item => item.UserProductId)
                    .ToList();

                var originalUserProducts = await _context.UserProduct
                    .Where(up => userProductIds.Contains(up.Id))
                    .ToListAsync();

                var newUserProducts = originalUserProducts
                    .Select(up => new UserProduct
                    {
                        UserId = userProductsMergeCriteria.UserId,
                        ProductId = up.ProductId,
                        InCart = up.InCart,
                        Quantity = up.Quantity,
                        Notes = up.Notes,
                    })
                    .ToList();

                _context.UserProduct.AddRange(newUserProducts);

                await _context.SaveChangesAsync();
            }

            var sql = "SELECT * FROM get_grocery_list_items(@p_user_id, @p_store_id);";
            var userIdParam = new NpgsqlParameter("p_user_id", userProductsMergeCriteria.UserId);
            var storeIdParam = new NpgsqlParameter("p_store_id", userProductsMergeCriteria.StoreId ?? 1);
            var results = await _context.GroceryListItem
                .FromSqlRaw(sql, userIdParam, storeIdParam)
                .ToListAsync();
            return results.FindAll(r => !r.IsHidden);
        }

        public async Task<AddUserProductsResult> AddFullNewUserProduct(FullUserProductRequest request)
        {
            using var transaction = await _context.Database.BeginTransactionAsync();

            var product = new Product { Name = request.ProductName };
            _context.Product.Add(product);
            await _context.SaveChangesAsync();

            var alphabeticalAisleIds = await _context.Aisle
                .Where(a => a.Name == "Alphabetical")
                .Select(a => a.Id)
                .ToListAsync(); // should only be one

            var allValidAisleIds = await _context.Aisle
                .Where(a => request.AisleIds.Contains(a.Id) || alphabeticalAisleIds.Contains(a.Id))
                .Select(a => a.Id)
                .Distinct()
                .ToListAsync();

            var aisleLinks = new List<AisleProduct>();
            foreach (var aisleId in allValidAisleIds)
            {
                var maxLineup = await _context.AisleProduct
                    .Where(ap => ap.AisleId == aisleId)
                    .MaxAsync(ap => (int?)ap.Lineup) ?? 1;

                aisleLinks.Add(new AisleProduct
                {
                    ProductId = product.Id,
                    AisleId = aisleId,
                    Lineup = maxLineup + 1
                });
            }
            _context.AisleProduct.AddRange(aisleLinks);

            var userProduct = new UserProduct
            {
                UserId = request.UserId,
                ProductId = product.Id,
                Quantity = request.Quantity,
                Notes = request.Notes,
                InCart = request.InCart,
                IsFavorite = request.IsFavorite,
            };
            _context.UserProduct.Add(userProduct);

            await _context.SaveChangesAsync();
            await transaction.CommitAsync();

            var sql = "SELECT * FROM get_grocery_list_items(@p_user_id, @p_store_id);";
            var userIdParam = new NpgsqlParameter("p_user_id", request.UserId);
            var storeIdParam = new NpgsqlParameter("p_store_id", request.CurrentStoreId);
            var results = await _context.GroceryListItem
                .FromSqlRaw(sql, userIdParam, storeIdParam)
                .ToListAsync();

            return new AddUserProductsResult
            {
                UnhandledProductsList = "",
                GroceryListItems = results.FindAll(r => !r.IsHidden)
            };
        }

        public async Task<List<GroceryListItem>> AddFavoriteUserProducts(UserProductsCriteria criteria)
        {
            var hiddenUserProducts = await _context.UserProduct
                .Where(up => criteria.UserId == up.UserId && up.IsHidden)
                .ToListAsync();

            hiddenUserProducts.ForEach(h =>
            {
                h.IsHidden = false;
                h.InCart = false;
            });
            await _context.SaveChangesAsync();
            var sql = "SELECT * FROM get_grocery_list_items(@p_user_id, @p_store_id);";
            var userIdParam = new NpgsqlParameter("p_user_id", criteria.UserId);
            var storeIdParam = new NpgsqlParameter("p_store_id", criteria.StoreId ?? 1);
            var results = await _context.GroceryListItem
                    .FromSqlRaw(sql, userIdParam, storeIdParam)
                    .ToListAsync();
            return results.FindAll(r => !r.IsHidden);
        }

        public async Task DeleteUserProduct(int userProductId)
        {
            var userProduct = await _context.Set<UserProduct>()
                .Where(up => up.Id == userProductId)
                .FirstAsync();

            if (userProduct != null)
            {
                if (userProduct.IsFavorite)
                {
                    userProduct.IsHidden = true;
                    await _context.SaveChangesAsync();
                }
                else
                {
                    _context.Remove(userProduct);
                    await _context.SaveChangesAsync();
                }
            }
        }

        public async Task DeleteGroceryList(int userId)
        {
            var userProducts = await _context.Set<UserProduct>()
                .Where(up => up.UserId == userId)
                .ToListAsync();

            if (userProducts.Count == 0) return;

            var toDelete = new List<UserProduct>();
            var toHide = new List<UserProduct>();

            foreach (var product in userProducts)
            {
                if (product.IsFavorite)
                    product.IsHidden = true;
                else
                    toDelete.Add(product);
            }

            if (toDelete.Count > 0)
            {
                _context.RemoveRange(toDelete);
            }

            await _context.SaveChangesAsync();
        }
    }
}
