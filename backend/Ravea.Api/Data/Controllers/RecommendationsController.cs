using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ravea.Api.Data;

namespace Ravea.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RecommendationsController : ControllerBase
    {
        private readonly RaveaDbContext _context;

        public RecommendationsController(RaveaDbContext context)
        {
            _context = context;
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetRecommendations(int userId)
        {
            var user = await _context.Users.FindAsync(userId);

            if (user == null)
                return NotFound("User not found.");

            if (string.IsNullOrWhiteSpace(user.SkinType) ||
                string.IsNullOrWhiteSpace(user.SkinTone))
            {
                return BadRequest("Please complete your skin profile first.");
            }

            var userSkinType = user.SkinType.Trim().ToLower();
            var userSkinTone = user.SkinTone.Trim().ToLower();

            var products = await _context.Products
                .Where(p =>
    (
        p.SkinType.ToLower() == userSkinType ||
        p.SkinType.ToLower() == "all skin types" ||
        p.SkinType.ToLower() == "all skin type"
    )
    &&
    (
        p.Tone.ToLower() == userSkinTone ||
        p.Tone.ToLower() == "all tones" ||
        p.Tone.ToLower() == "all tone types" ||
        p.Tone.ToLower() == "all skin tones"
    )
)
                .ToListAsync();

            return Ok(products);
        }
    }
}