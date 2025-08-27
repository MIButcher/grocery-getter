using GroceryGetter.Models;

namespace GroceryGetter.DomainServices.Models
{
    public class UserProductsMergeCriteria
    {
        public int UserId { get; set; }
        public int? StoreId { get; set; }
        public required List<GroceryListItem> GroceryListItems { get; set; }
    }
}
