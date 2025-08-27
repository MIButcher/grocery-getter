namespace GroceryGetter.Models
{  
    public class UserProduct
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public bool InCart { get; set; }
        public int Quantity { get; set; }
        public string? Notes { get; set; }
        public User User { get; set; }
        public Product Product { get; set; }
    }
}