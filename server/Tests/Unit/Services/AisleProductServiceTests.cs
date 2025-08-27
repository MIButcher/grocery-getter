using Xunit;
using Moq;
using Microsoft.EntityFrameworkCore;
using GroceryGetter.Services;
using GroceryGetter.Models;
using GroceryGetter.Database;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

namespace GroceryGetter.Tests.Unit.Services
{
    public class AisleProductServiceTests
    {
        [Fact]
        public async Task GetAisleProductById_ReturnsCorrectAisleProduct()
        {
            // Arrange
            var options = new DbContextOptionsBuilder<PgDbContext>()
                .UseInMemoryDatabase(databaseName: "TestDb")
                .Options;

            using var context = new PgDbContext(options);
            var testId = 1;
            var testProduct = new AisleProduct { Id = testId, ProductId = 42, AisleId = 7 };
            context.AisleProduct.Add(testProduct);
            await context.SaveChangesAsync();

            var service = new AisleProductService(context);

            // Act
            var result = await service.GetAisleProductById(testId);

            // Assert
            Assert.NotNull(result);
            Assert.Equal(testId, result.Id);
            Assert.Equal(42, result.ProductId);
            Assert.Equal(7, result.AisleId);
        }
    }
}