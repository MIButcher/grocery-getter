using GroceryGetter.Models;

namespace GroceryGetter.DomainServices
{
    public interface IAisleProductService
    {
        Task<AisleProduct?> GetAisleProductById(int aisleProductId);
        Task<List<AisleProduct>> GetAisleProductsByAisleId(int aisleId);
        Task<List<AisleProduct>> GetAllAisleProducts();
        Task<AisleProduct> AddAisleProduct(AisleProduct aisleProduct);
    }
}
