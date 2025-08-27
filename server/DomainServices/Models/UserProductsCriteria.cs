using GroceryGetter.Models;

namespace GroceryGetter.DomainServices.Models
{
    public class UserProductsCriteria
    {
        public int UserId { get; set; }
        public int? StoreId { get; set; }
        public string ProductsList { get; set; } = string.Empty;
    }
}
