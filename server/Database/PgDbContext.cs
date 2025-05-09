using Microsoft.EntityFrameworkCore;
using GroceryGetter.Models;

namespace GroceryGetter.Database
{
    public class PgDbContext : DbContext
    {
        public PgDbContext(DbContextOptions<PgDbContext> options) : base(options) { }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseNpgsql("Your_PostgreSQL_Connection_String");
            }
        }

        public DbSet<Store> Store { get; set; }
        public DbSet<Layout> Layout { get; set; }
        public DbSet<Aisle> Aisle { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<AisleProduct> AisleProduct { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<UserProduct> UserProduct { get; set; }
    }
}