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

        /// <summary>
        /// Initializes a new instance of the <see cref="LayoutController"/> class.
        /// </summary>
        /// <param name="layoutService">Service for layout operations.</param>
        public LayoutController(ILayoutService layoutService)
        {
            _layoutService = layoutService;
        }

        /// <summary>
        /// Retrieves a layout by its unique identifier.
        /// </summary>
        /// <param name="layoutId">The ID of the layout to retrieve.</param>
        /// <returns>The layout if found; otherwise, null.</returns>
        [HttpGet("{layoutId}", Name = "GetLayoutById")]
        public async Task<Layout?> GetLayout(int layoutId)
        {
            return await _layoutService.GetLayoutById(layoutId);
        }

        /// <summary>
        /// Retrieves all layouts associated with a specific store.
        /// </summary>
        /// <param name="storeId">The ID of the store.</param>
        /// <returns>A list of layouts for the specified store.</returns>
        [HttpPost("{storeId}", Name = "GetLayoutsByStoreId")]
        public async Task<IEnumerable<Layout>> GetLayoutsByStoreId(int storeId)
        {
            return await _layoutService.GetLayoutsByStoreId(storeId);
        }

        /// <summary>
        /// Retrieves all layouts in the system.
        /// </summary>
        /// <returns>A list of all layouts.</returns>
        [HttpGet(Name = "GetLayouts")]
        public async Task<IEnumerable<Layout>> GetLayouts()
        {
            return await _layoutService.GetAllLayouts();
        }

        /// <summary>
        /// Saves a layout. Creates a new layout or updates an existing one.
        /// </summary>
        /// <param name="layout">The layout to save.</param>
        /// <returns>The saved layout entity.</returns>
        /// <exception cref="InvalidOperationException">
        /// Thrown if a layout with the same name already exists for the store.
        /// </exception>
        [HttpPost(Name = "SaveLayout")]
        public async Task<Layout> SaveLayout(Layout layout)
        {
            return await _layoutService.SaveLayout(layout);
        }
    }
}
