namespace GroceryGetter.DomainServices.Models
{
    public class FullUserProductRequest
    {
        public required int UserId { get; set; }
        public required int CurrentStoreId { get; set; }
        public required string ProductName { get; set; }
        public string? Notes { get; set; }
        public int Quantity { get; set; } = 1;
        public int[] AisleIds { get; set; } = Array.Empty<int>();
        public bool InCart { get; set; } = false;
        public bool IsVerified { get; set; } = false;
        public bool IsFavorite { get; set; } = false;
        public bool IsHidden { get; set; } = false;
    }
}
