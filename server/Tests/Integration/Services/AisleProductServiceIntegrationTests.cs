using Xunit;
using Testcontainers.PostgreSql;
using Microsoft.EntityFrameworkCore;
using GroceryGetter.Database;
using GroceryGetter.Models;
using GroceryGetter.Services;
using GroceryGetter.Tests.Integration.Utilities;

namespace GroceryGetter.Tests.Integration.Services
{
    public class AisleProductServiceTestcontainersTests : IAsyncLifetime
    {
        private readonly PostgreSqlContainer _pgContainer;
        private PgDbContext _context = null!;
        private AisleProductService _service = null!;

        public AisleProductServiceTestcontainersTests()
        {
            _pgContainer = new PostgreSqlBuilder()
                .WithDatabase("testdb")
                .WithUsername("testuser")
                .WithPassword("testpass")
                .Build();
        }

        public async Task InitializeAsync()
        {
            await _pgContainer.StartAsync();

            var options = new DbContextOptionsBuilder<PgDbContext>()
                .UseNpgsql(_pgContainer.GetConnectionString())
                .Options;

            _context = new PgDbContext(options);
            await _context.Database.EnsureCreatedAsync();

            _service = new AisleProductService(_context);
        }

        public async Task DisposeAsync()
        {
            await _pgContainer.StopAsync();
            await _pgContainer.DisposeAsync();
        }

        [Fact]
        public async Task SaveAisleProduct_NewAisleProductPersistsToPostgres()
        {
            var builder = new TestDataBuilder(_context);
            var store = await builder.CreateStoreAsync();
            var layout = await builder.CreateLayoutAsync(store);
            var aisle = await builder.CreateAisleAsync(layout);
            var product = await builder.CreateProductAsync("Milk");
            var aisleProduct = await _service.SaveAisleProduct(new AisleProduct{ ProductId = product.Id, AisleId = aisle.Id });

            var result = await _service.GetAisleProductById(aisleProduct.Id);

            Assert.NotNull(result);
            Assert.Equal(aisleProduct.Id, result!.Id);
            Assert.Equal(product.Id, result.ProductId);
            Assert.Equal(aisle.Id, result.AisleId);
        }

        [Fact]
        public async Task SaveAisleProduct_UpdatedExistingAisleProductPersistsToPostgres()
        {
            var builder = new TestDataBuilder(_context);
            var store = await builder.CreateStoreAsync();
            var layout = await builder.CreateLayoutAsync(store);
            var aisleOne = await builder.CreateAisleAsync(layout);
            var aisleTwo = await builder.CreateAisleAsync(layout, "Aisle 2", 2);
            var product = await builder.CreateProductAsync("Milk");
            var aisleProduct = await builder.CreateAisleProductAsync(product, aisleOne);

            var newAisleProduct = await _service.GetAisleProductById(aisleProduct.Id);

            Assert.NotNull(newAisleProduct);
            Assert.Equal(aisleProduct.Id, newAisleProduct.Id);
            Assert.Equal(product.Id, newAisleProduct.ProductId);
            Assert.Equal(aisleOne.Id, newAisleProduct.AisleId);

            newAisleProduct.AisleId = aisleTwo.Id;
            var updatedAisleProduct = await _service.SaveAisleProduct(newAisleProduct);

            Assert.NotNull(updatedAisleProduct);
            Assert.Equal(newAisleProduct.Id, updatedAisleProduct.Id);
            Assert.Equal(newAisleProduct.ProductId, updatedAisleProduct.ProductId);
            Assert.Equal(aisleTwo.Id, updatedAisleProduct.AisleId);
        }
    }
}