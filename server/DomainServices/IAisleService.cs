using GroceryGetter.Models;

namespace GroceryGetter.DomainServices
{
    public interface IAisleService
    {
        Task<Aisle?> GetAisleById(int aisleId);
        Task<IEnumerable<Aisle>> GetAisleByLayoutId(int layoutId);
        Task<IEnumerable<Aisle>> GetAllAisles();
        Task<Aisle> AddAisle(Aisle aisle);
    }
}
