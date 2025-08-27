using GroceryGetter.Models;

namespace GroceryGetter.DomainServices.Models
{
    public class AddUserProductsResult
    {
        public string UnhandledProductsList { get; set; } = string.Empty;
        public List<GroceryListItem> GroceryListItems { get; set; } = [];
    }
}
