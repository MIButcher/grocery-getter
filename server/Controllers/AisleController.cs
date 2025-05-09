using GroceryGetter.Models;
using GroceryGetter.DomainServices;
using Microsoft.AspNetCore.Mvc;

namespace GroceryGetter.Controllers
{
    [ApiController]
    [Route("api/aisles")]
    public class AisleController : ControllerBase
    {
        private readonly IAisleService _aisleService;

        public AisleController(IAisleService aisleService)
        {
            _aisleService = aisleService;
        }

        [HttpGet("{aisleId}", Name = "GetAisleById")]
        public async Task<IActionResult> GetAisleById(int aisleId)
        {
            var aisle = await _aisleService.GetAisleById(aisleId);
            if (aisle == null)
            {
                return NotFound();
            }
            return Ok(aisle);
        }

        [HttpPost("{layoutId}", Name = "GetAisleByLayoutId")]
        public async Task<IActionResult> GetAisleByLayoutId(int layoutId)
        {
            var aisle = await _aisleService.GetAisleByLayoutId(layoutId);
            if (aisle == null)
            {
                return NotFound();
            }
            return Ok(aisle);
        }

        [HttpGet]
        public async Task<IActionResult> GetAisles()
        {
            var aisles = await _aisleService.GetAllAisles();
            return Ok(aisles);
        }

        [HttpPost]
        public async Task<IActionResult> AddAisle(Aisle aisle)
        {
            var createdAisle = await _aisleService.AddAisle(aisle);
            return CreatedAtAction(nameof(GetAisles), new { id = createdAisle.Id }, createdAisle);
        }
    }
}
