namespace GroceryGetter.Models
{
    public class Aisle
    {
        public int Id { get; set; }
        public int LayoutId { get; set; }
        public string Name { get; set; }
        public int Lineup { get; set; }
        public Layout Layout { get; set; }
    }
}