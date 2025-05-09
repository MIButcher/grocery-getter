using GroceryGetter.Models;

namespace GroceryGetter.DomainServices
{
    public interface ILayoutService
    {
        Task<Layout?> GetLayoutById(int layoutId);
        Task<List<Layout>> GetLayoutsByStoreId(int storeId);
        Task<List<Layout>> GetAllLayouts();
        Task<Layout> AddLayout(Layout layout);
    }
}
