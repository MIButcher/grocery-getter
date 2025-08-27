namespace GroceryGetter.DomainServices.Models
{
    public class GroceryListItem
    {
        public int UserProductId { get; set; }
        public int? AisleLineup { get; set; }
        public string? ProductName { get; set; }
        public string? AisleName { get; set; }
        public int Quantity { get; set; }
        public string? Notes { get; set; }
        public bool InCart { get; set; }
    }
}
