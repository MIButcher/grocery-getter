namespace GroceryGetter.DomainServices.Models
{
    public class GroceryListItem
    {
        public int UserProductId { get; set; }
        public int? AisleLineup { get; set; }
        public int? ProductLineup { get; set; }
        public string? ProductName { get; set; }
        public string? AisleName { get; set; }
        public int Quantity { get; set; }
        public string? Notes { get; set; }
        public bool InCart { get; set; }
        public bool IsFavorite { get; set; }
        public bool IsHidden { get; set; }
    }
}
