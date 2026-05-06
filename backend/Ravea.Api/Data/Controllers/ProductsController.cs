using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ravea.Api.Data;
using Ravea.Api.Models;

namespace Ravea.Api.Controllers
{
    public class CreateProductRatingDto
    {
        public int RatingValue { get; set; }
        public int UserId { get; set; }
    }

    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly RaveaDbContext _context;

        public ProductsController(RaveaDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            var products = await _context.Products
                .Select(p => new
                {
                    p.Id,
                    p.Name,
                    p.Description,
                    p.Category,
                    p.SkinType,
                    p.Tone,
                    p.Price,
                    p.ImageUrl,

                    AverageRating = _context.ProductRatings
                        .Where(r => r.ProductId == p.Id)
                        .Any()
                            ? _context.ProductRatings
                                .Where(r => r.ProductId == p.Id)
                                .Average(r => r.RatingValue)
                            : 0,

                    RatingCount = _context.ProductRatings
                        .Count(r => r.ProductId == p.Id)
                })
                .ToListAsync();

            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProductById(int id, [FromQuery] int? userId)
        {
            var product = await _context.Products
                .Where(p => p.Id == id)
                .Select(p => new
                {
                    p.Id,
                    p.Name,
                    p.Description,
                    p.Category,
                    p.SkinType,
                    p.Tone,
                    p.Price,
                    p.ImageUrl,

                    AverageRating = _context.ProductRatings
                        .Where(r => r.ProductId == p.Id)
                        .Any()
                            ? _context.ProductRatings
                                .Where(r => r.ProductId == p.Id)
                                .Average(r => r.RatingValue)
                            : 0,

                    RatingCount = _context.ProductRatings
                        .Count(r => r.ProductId == p.Id),

                    UserRating = userId == null
                        ? 0
                        : _context.ProductRatings
                            .Where(r => r.ProductId == p.Id && r.UserId == userId)
                            .Select(r => r.RatingValue)
                            .FirstOrDefault()
                })
                .FirstOrDefaultAsync();

            if (product == null)
                return NotFound("Product not found.");

            return Ok(product);
        }

        [HttpPost("{id}/ratings")]
        public async Task<IActionResult> AddOrUpdateRating(int id, [FromBody] CreateProductRatingDto request)
        {
            if (request.UserId <= 0)
                return Unauthorized("You must be logged in to rate a product.");

            if (request.RatingValue < 1 || request.RatingValue > 5)
                return BadRequest("Rating must be between 1 and 5.");

            var productExists = await _context.Products.AnyAsync(p => p.Id == id);

            if (!productExists)
                return NotFound("Product not found.");

            var userExists = await _context.Users.AnyAsync(u => u.Id == request.UserId);

            if (!userExists)
                return Unauthorized("Invalid user. Please login again.");

            var existingRating = await _context.ProductRatings
                .FirstOrDefaultAsync(r => r.ProductId == id && r.UserId == request.UserId);

            if (existingRating == null)
            {
                var rating = new ProductRating
                {
                    ProductId = id,
                    UserId = request.UserId,
                    RatingValue = request.RatingValue,
                    CreatedAt = DateTime.Now
                };

                _context.ProductRatings.Add(rating);
            }
            else
            {
                existingRating.RatingValue = request.RatingValue;
                existingRating.UpdatedAt = DateTime.Now;
            }

            await _context.SaveChangesAsync();

            var ratings = _context.ProductRatings.Where(r => r.ProductId == id);

            var averageRating = await ratings.AnyAsync()
                ? await ratings.AverageAsync(r => r.RatingValue)
                : 0;

            var ratingCount = await ratings.CountAsync();

            return Ok(new
            {
                message = "Rating saved successfully.",
                averageRating,
                ratingCount,
                userRating = request.RatingValue
            });
        }

        [HttpPost]
        public async Task<IActionResult> CreateProduct(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();

            return Ok(product);
        }
    }
}