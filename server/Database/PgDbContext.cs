using Microsoft.EntityFrameworkCore;
using GroceryGetter.Models;
using GroceryGetter.DomainServices.Models;
//using FluentMigrator.Runner.Versioning;

namespace GroceryGetter.Database
{
    public class PgDbContext : DbContext
    {
        public PgDbContext(DbContextOptions<PgDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // GroceryListItem mapped to a database function
            modelBuilder.Entity<GroceryListItem>(entity =>
            {
                entity.HasNoKey();
                entity.ToFunction("get_grocery_list_items");
            });

            // Store
            modelBuilder.Entity<Store>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(150);
                entity.Property(e => e.Address).IsRequired().HasMaxLength(150);
                entity.Property(e => e.City).IsRequired().HasMaxLength(50);
                entity.Property(e => e.State).IsRequired().HasMaxLength(2);
                entity.Property(e => e.ZipCode).IsRequired().HasMaxLength(10);
                entity.Property(e => e.PhoneNumber).IsRequired().HasMaxLength(10);
            });

            // Layout
            modelBuilder.Entity<Layout>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(150);
                entity.Property(e => e.IsActive).IsRequired().HasDefaultValue(true);

                entity.HasOne(e => e.Store)
                      .WithMany()
                      .HasForeignKey(e => e.StoreId)
                      .OnDelete(DeleteBehavior.NoAction);
            });

            // Aisle
            modelBuilder.Entity<Aisle>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(150);
                entity.Property(e => e.Lineup).IsRequired();

                entity.HasOne(e => e.Layout)
                      .WithMany()
                      .HasForeignKey(e => e.LayoutId)
                      .OnDelete(DeleteBehavior.NoAction);
            });

            // Product
            modelBuilder.Entity<Product>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.Name).IsRequired().HasMaxLength(150);
            });

            modelBuilder.Entity<AisleProduct>(entity =>
            {
                entity.HasKey(e => e.Id);

                entity.HasOne(e => e.Product)
                      .WithMany()
                      .HasForeignKey(e => e.ProductId)
                      .OnDelete(DeleteBehavior.NoAction);

                entity.HasOne(e => e.Aisle)
                      .WithMany()
                      .HasForeignKey(e => e.AisleId)
                      .OnDelete(DeleteBehavior.NoAction);

                entity.HasIndex(e => new { e.ProductId, e.Lineup })
                      .IsUnique()
                      .HasDatabaseName("UQ_AisleProduct_ProductId_Lineup");
            });

            // User
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.FirstName).IsRequired().HasMaxLength(150);
                entity.Property(e => e.LastName).IsRequired().HasMaxLength(150);
                entity.Property(e => e.Email).IsRequired().HasMaxLength(250);
                entity.Property(e => e.Password).IsRequired().HasMaxLength(255);
            });

            // UserProduct
            modelBuilder.Entity<UserProduct>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e => e.InCart).IsRequired().HasDefaultValue(false);
                entity.Property(e => e.Quantity).IsRequired().HasDefaultValue(1);
                entity.Property(e => e.Notes).HasMaxLength(250);

                entity.HasOne(e => e.User)
                      .WithMany()
                      .HasForeignKey(e => e.UserId)
                      .OnDelete(DeleteBehavior.NoAction);

                entity.HasOne(e => e.Product)
                      .WithMany()
                      .HasForeignKey(e => e.ProductId)
                      .OnDelete(DeleteBehavior.NoAction);
            });

            //// VersionInfo (used by FluentMigrator)
            //modelBuilder.Entity<VersionInfo>(entity =>
            //{
            //    entity.HasKey(e => e.Version);
            //    entity.Property(e => e.Description).HasMaxLength(1024);
            //});
        }

        public DbSet<Store> Store { get; set; }
        public DbSet<Layout> Layout { get; set; }
        public DbSet<Aisle> Aisle { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<AisleProduct> AisleProduct { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<UserProduct> UserProduct { get; set; }
        public DbSet<GroceryListItem> GroceryListItem {get;set;}
    }
}