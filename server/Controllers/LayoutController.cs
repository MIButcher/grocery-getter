using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.AspNetCore.Mvc;

namespace GroceryGetter.Controllers
{
    [ApiController]
    [Route("api/layouts")]
    public class LayoutController : ControllerBase
    {
        private readonly ILayoutService _layoutService;

        public LayoutController(ILayoutService layoutService)
        {
            _layoutService = layoutService;
        }

        [HttpGet("{layoutId}", Name = "GetLayoutById")]
        public async Task<IActionResult> GetLayout(int layoutId)
        {
            var layout = await _layoutService.GetLayoutById(layoutId);
            if (layout == null)
            {
                return NotFound();
            }
            return Ok(layout);
        }

        [HttpPost("{storeId}", Name = "GetLayoutsByStoreId")]
        public async Task<IActionResult> GetLayoutsByStoreId(int storeId)
        {
            var layouts = await _layoutService.GetLayoutsByStoreId(storeId);
            return Ok(layouts);
        }

        [HttpGet]
        public async Task<IActionResult> GetLayouts()
        {
            var layouts = await _layoutService.GetAllLayouts();
            return Ok(layouts);
        }

        [HttpPost]
        public async Task<IActionResult> AddLayout(Layout layout)
        {
            var createdLayout = await _layoutService.AddLayout(layout);
            return CreatedAtAction(nameof(GetLayouts), new { id = createdLayout.Id }, createdLayout);
        }
    }
}
