using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ravea.Api.Data;
using Ravea.Api.Models;

namespace Ravea.Api.Controllers
{
    public class AddCartItemDto
    {
        public int UserId { get; set; }
        public int ProductId { get; set; }
    }

    public class UpdateCartQuantityDto
    {
        public int Quantity { get; set; }
    }

    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase
    {
        private readonly RaveaDbContext _context;

        public CartController(RaveaDbContext context)
        {
            _context = context;
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetCart(int userId)
        {
            var items = await _context.CartItems
                .Include(c => c.Product)
                .Where(c => c.UserId == userId)
                .Select(c => new
                {
                    c.Id,
                    c.UserId,
                    c.ProductId,
                    c.Quantity,
                    Product = new
                    {
                        c.Product.Id,
                        c.Product.Name,
                        c.Product.Description,
                        c.Product.Category,
                        c.Product.SkinType,
                        c.Product.Tone,
                        c.Product.Price,
                        c.Product.ImageUrl
                    }
                })
                .ToListAsync();

            return Ok(items);
        }

        [HttpPost]
        public async Task<IActionResult> AddToCart(AddCartItemDto request)
        {
            var userExists = await _context.Users.AnyAsync(u => u.Id == request.UserId);
            if (!userExists)
                return NotFound("User not found.");

            var productExists = await _context.Products.AnyAsync(p => p.Id == request.ProductId);
            if (!productExists)
                return NotFound("Product not found.");

            var existingItem = await _context.CartItems
                .FirstOrDefaultAsync(c =>
                    c.UserId == request.UserId &&
                    c.ProductId == request.ProductId
                );

            if (existingItem != null)
            {
                existingItem.Quantity += 1;
                existingItem.UpdatedAt = DateTime.Now;
            }
            else
            {
                var cartItem = new CartItem
                {
                    UserId = request.UserId,
                    ProductId = request.ProductId,
                    Quantity = 1,
                    CreatedAt = DateTime.Now
                };

                _context.CartItems.Add(cartItem);
            }

            await _context.SaveChangesAsync();

            return Ok("Product added to cart.");
        }

        [HttpPut("{cartItemId}")]
        public async Task<IActionResult> UpdateQuantity(
            int cartItemId,
            UpdateCartQuantityDto request
        )
        {
            var cartItem = await _context.CartItems.FirstOrDefaultAsync(c => c.Id == cartItemId);

            if (cartItem == null)
                return NotFound("Cart item not found.");

            if (request.Quantity <= 0)
            {
                _context.CartItems.Remove(cartItem);
            }
            else
            {
                cartItem.Quantity = request.Quantity;
                cartItem.UpdatedAt = DateTime.Now;
            }

            await _context.SaveChangesAsync();

            return Ok("Cart updated.");
        }

        [HttpDelete("{cartItemId}")]
        public async Task<IActionResult> RemoveFromCart(int cartItemId)
        {
            var cartItem = await _context.CartItems.FirstOrDefaultAsync(c => c.Id == cartItemId);

            if (cartItem == null)
                return NotFound("Cart item not found.");

            _context.CartItems.Remove(cartItem);
            await _context.SaveChangesAsync();

            return Ok("Product removed from cart.");
        }

        [HttpDelete("clear/{userId}")]
        public async Task<IActionResult> ClearCart(int userId)
        {
            var items = await _context.CartItems
                .Where(c => c.UserId == userId)
                .ToListAsync();

            _context.CartItems.RemoveRange(items);
            await _context.SaveChangesAsync();

            return Ok("Cart cleared.");
        }
    }
}