using GroceryGetter.Models;
using GroceryGetter.DomainServices; // Updated namespace
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/stores")]
public class StoreController : ControllerBase
{
    private readonly IStoreService _storeService;

    public StoreController(IStoreService storeService)
    {
        _storeService = storeService;
    }

    [HttpGet("{storeId}", Name = "GetStoreById")]
    public async Task<IActionResult> GetStore(int storeId)
    {
        var store = await _storeService.GetStoreById(storeId);
        if (store == null)
        {
            return NotFound();
        }
        return Ok(store);
    }

    [HttpGet]
    public async Task<IActionResult> GetStores()
    {
        var stores = await _storeService.GetAllStores();
        return Ok(stores);
    }

    [HttpPost]
    public async Task<IActionResult> AddStore(Store store)
    {
        var createdStore = await _storeService.AddStore(store);
        return CreatedAtAction(nameof(GetStores), new { id = createdStore.Id }, createdStore);
    }
}