using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ravea.Api.Data;
using Ravea.Api.Models;

namespace Ravea.Api.Controllers
{
    public class CreateOrderDto
    {
        public int UserId { get; set; }
    }

    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly RaveaDbContext _context;

        public OrdersController(RaveaDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateOrder(CreateOrderDto request)
        {
            var userExists = await _context.Users.AnyAsync(u => u.Id == request.UserId);

            if (!userExists)
                return NotFound("User not found.");

            var cartItems = await _context.CartItems
                .Include(c => c.Product)
                .Where(c => c.UserId == request.UserId)
                .ToListAsync();

            if (!cartItems.Any())
                return BadRequest("Cart is empty.");

            var totalAmount = cartItems.Sum(item => item.Product.Price * item.Quantity);

            var order = new Order
            {
                UserId = request.UserId,
                TotalAmount = totalAmount,
                Status = "Confirmed",
                CreatedAt = DateTime.Now
            };

            foreach (var item in cartItems)
            {
                order.OrderItems.Add(new OrderItem
                {
                    ProductId = item.ProductId,
                    Quantity = item.Quantity,
                    UnitPrice = item.Product.Price
                });
            }

            _context.Orders.Add(order);
            _context.CartItems.RemoveRange(cartItems);

            await _context.SaveChangesAsync();

            return Ok(new
            {
                order.Id,
                order.UserId,
                order.TotalAmount,
                order.Status,
                order.CreatedAt,
                Items = order.OrderItems.Select(item => new
                {
                    item.ProductId,
                    item.Quantity,
                    item.UnitPrice
                })
            });
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetOrderById(int id)
        {
            var order = await _context.Orders
                .Include(o => o.OrderItems)
                .ThenInclude(oi => oi.Product)
                .Where(o => o.Id == id)
                .Select(o => new
                {
                    o.Id,
                    o.UserId,
                    o.TotalAmount,
                    o.Status,
                    o.CreatedAt,
                    Items = o.OrderItems.Select(item => new
                    {
                        item.ProductId,
                        item.Product.Name,
                        item.Product.ImageUrl,
                        item.Quantity,
                        item.UnitPrice,
                        Subtotal = item.UnitPrice * item.Quantity
                    })
                })
                .FirstOrDefaultAsync();

            if (order == null)
                return NotFound("Order not found.");

            return Ok(order);
        }
    }
}