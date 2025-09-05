namespace GroceryGetter.Models
{
    public class Layout
    {
        public int Id { get; set; }
        public int StoreId { get; set; }
        public string Name { get; set; }
        public bool IsActive { get; set; }
        public virtual Store Store { get; set; }
    }
}