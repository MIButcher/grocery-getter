using GroceryGetter.Models;

namespace GroceryGetter.DomainServices.Models
{
    public class StoreLayoutAisleData
    {
        public Store[] Stores { get; set; } = Array.Empty<Store>();
        public Layout[] Layouts { get; set; } = Array.Empty<Layout>();
        public Aisle[] Aisles { get; set; } = Array.Empty<Aisle>();
    }
}
