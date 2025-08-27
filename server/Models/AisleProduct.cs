namespace GroceryGetter.Models
{  
    public class AisleProduct
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int AisleId { get; set; }
        public bool IsVerified { get; set; }
        public Product Product { get; set; }
        public Aisle Aisle { get; set; }
    }
}