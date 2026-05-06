using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ravea.Api.Data;
using Ravea.Api.Models;

namespace Ravea.Api.Controllers
{
    public class RegisterDto
    {
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public string? SkinType { get; set; }
        public string? SkinTone { get; set; }
    }

    public class LoginDto
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly RaveaDbContext _context;

        public AuthController(RaveaDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterDto request)
        {
            if (string.IsNullOrWhiteSpace(request.Name) ||
                string.IsNullOrWhiteSpace(request.Email) ||
                string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest("Name, email, and password are required.");
            }

            var email = request.Email.Trim().ToLower();

            var emailExists = await _context.Users.AnyAsync(u => u.Email.ToLower() == email);

            if (emailExists)
                return BadRequest("Email already exists.");

            var user = new User
            {
                Name = request.Name.Trim(),
                Email = email,
                Password = request.Password,
                SkinType = request.SkinType,
                SkinTone = request.SkinTone
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new
            {
                user.Id,
                user.Name,
                user.Email,
                user.SkinType,
                user.SkinTone
            });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginDto request)
        {
            var email = request.Email.Trim().ToLower();

            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email.ToLower() == email && u.Password == request.Password);

            if (user == null)
                return Unauthorized("Invalid email or password.");

            return Ok(new
            {
                user.Id,
                user.Name,
                user.Email,
                user.SkinType,
                user.SkinTone
            });
        }
    }
}