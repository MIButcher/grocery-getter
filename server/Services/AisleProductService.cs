using GroceryGetter.Database;
using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.EntityFrameworkCore;

namespace GroceryGetter.Services
{
    //public class AisleProductService : IAisleProductService
    //{
    //    private readonly IAisleProductRepository _repository;
    //    //private readonly ILogger<AisleProductService> _logger;

    //    public AisleProductService(
    //        IAisleProductRepository repository)
    //        //ILogger<AisleProductService> logger)
    //    {
    //        _repository = repository;
    //        //_logger = logger;
    //    }

    //    public async Task<AisleProduct?> GetAisleProductById(int id)
    //    {
    //        return await _repository.GetByIdAsync(id);
    //    }

    //    public async Task<AisleProduct?> GetAisleProductByProductId(int productId)
    //    {
    //        return await _repository.GetByProductIdAsync(productId);
    //    }

    //    public async Task<List<AisleProduct>> GetAisleProductsByAisleId(int aisleId)
    //    {
    //        return await _repository.GetByAisleIdAsync(aisleId);
    //    }

    //    public async Task<List<AisleProduct>> GetAllAisleProducts()
    //    {
    //        return await _repository.GetAllAsync();
    //    }

    //    public async Task<AisleProduct> SaveAisleProduct(AisleProduct aisleProduct)
    //    {
    //        if (aisleProduct == null)
    //        {
    //            throw new ArgumentNullException(nameof(aisleProduct));
    //        }

    //        if (aisleProduct.Id > 0)
    //        {
    //            var existing = await _repository.GetByIdAsync(aisleProduct.Id);
    //            if (existing == null)
    //            {
    //                //_logger.LogWarning("Attempted to update non-existent AisleProduct with ID {Id}", aisleProduct.Id);
    //                throw new InvalidOperationException("AisleProduct not found.");
    //            }

    //            existing.ProductId = aisleProduct.ProductId;
    //            existing.AisleId = aisleProduct.AisleId;
    //            existing.IsVerified = aisleProduct.IsVerified;

    //            var updatedAisleProduct = await _repository.SaveAsync(existing);
    //            return updatedAisleProduct;
    //        }
    //        else
    //        {
    //            var newAisleProduct = await _repository.SaveAsync(aisleProduct);
    //            return newAisleProduct;
    //        }
    //    }

    //    //public async Task DeleteAsync(int id)
    //    //{
    //    //    var existing = await _repository.GetByIdAsync(id);
    //    //    if (existing == null)
    //    //    {
    //    //        _logger.LogWarning("Attempted to delete non-existent AisleProduct with ID {Id}", id);
    //    //        throw new InvalidOperationException("AisleProduct not found.");
    //    //    }

    //    //    await _repository.DeleteAsync(id);
    //    //}
    //}
    public class AisleProductService : IAisleProductService
    {
        private readonly PgDbContext _context;

        public AisleProductService(PgDbContext context)
        {
            _context = context;
        }

        public async Task<AisleProduct?> GetAisleProductById(int aisleProductId)
        {
            return await _context.AisleProduct.FindAsync(aisleProductId);
        }

        public async Task<AisleProduct?> GetAisleProductByProductId(int productId)
        {
            return await _context.AisleProduct
                .Where(ap => ap.ProductId == productId)
                .FirstOrDefaultAsync();
        }

        public async Task<List<AisleProduct>> GetAisleProductsByAisleId(int aisleId)
        {
            return await _context.AisleProduct
                .Where(a => a.AisleId == aisleId)
                .ToListAsync();
        }

        public async Task<List<AisleProduct>> GetAllAisleProducts()
        {
            return await _context.AisleProduct.ToListAsync();
        }

        public async Task<AisleProduct> SaveAisleProduct(AisleProduct aisleProduct)
        {
            if (aisleProduct.Id > 0)
            {
                var existingAisleProduct = await _context.AisleProduct.FindAsync(aisleProduct.Id);
                if (existingAisleProduct != null)
                {
                    _context.Entry(existingAisleProduct).CurrentValues.SetValues(aisleProduct);
                }
            }
            else
            {
                _context.AisleProduct.Add(aisleProduct);
            }

            await _context.SaveChangesAsync();
            return aisleProduct;
        }
    }
}
