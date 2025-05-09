using GroceryGetter.Models;

namespace GroceryGetter.DomainServices
{
    public interface IStoreService
    {
        Task<Store?> GetStoreById(int storeId);
        Task<List<Store>> GetAllStores();
        Task<Store> AddStore(Store store);
    }
}
