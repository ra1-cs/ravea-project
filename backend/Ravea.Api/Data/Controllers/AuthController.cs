using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Ravea.Api.Data;
using Ravea.Api.Models;
using Ravea.Api.Services;

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

    public class ForgotPasswordDto
    {
        public string Email { get; set; } = string.Empty;
    }

    public class ResetPasswordDto
    {
        public string Email { get; set; } = string.Empty;
        public string ResetCode { get; set; } = string.Empty;
        public string NewPassword { get; set; } = string.Empty;
    }

    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly RaveaDbContext _context;
private readonly EmailService _emailService;

public AuthController(RaveaDbContext context, EmailService emailService)
{
    _context = context;
    _emailService = emailService;
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
            if (string.IsNullOrWhiteSpace(request.Email) ||
                string.IsNullOrWhiteSpace(request.Password))
            {
                return BadRequest("Email and password are required.");
            }

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

        [HttpPost("forgot-password")]
        public async Task<IActionResult> ForgotPassword(ForgotPasswordDto request)
        {
            if (string.IsNullOrWhiteSpace(request.Email))
                return BadRequest("Email is required.");

            var email = request.Email.Trim().ToLower();

            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email.ToLower() == email);

            if (user == null)
                return NotFound("No account found with this email.");

            var resetCode = Random.Shared.Next(100000, 999999).ToString();

            user.ResetCode = resetCode;
            user.ResetCodeExpiresAt = DateTime.Now.AddMinutes(10);
                await _context.SaveChangesAsync(); 

            await _emailService.SendPasswordResetCodeAsync(user.Email, resetCode);

return Ok(new
{
    message = "A reset code has been sent to your email."
});
        }

        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword(ResetPasswordDto request)
        {
            if (string.IsNullOrWhiteSpace(request.Email) ||
                string.IsNullOrWhiteSpace(request.ResetCode) ||
                string.IsNullOrWhiteSpace(request.NewPassword))
            {
                return BadRequest("Email, code, and new password are required.");
            }

            var email = request.Email.Trim().ToLower();

            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email.ToLower() == email);

            if (user == null)
                return NotFound("No account found with this email.");

           var submittedCode = request.ResetCode.Trim();

if (user.ResetCode != submittedCode)
    return BadRequest("Invalid reset code.");

            if (user.ResetCodeExpiresAt == null || user.ResetCodeExpiresAt < DateTime.Now)
                return BadRequest("Reset code has expired.");

            user.Password = request.NewPassword;
            user.ResetCode = null;
            user.ResetCodeExpiresAt = null;

            await _context.SaveChangesAsync();

            return Ok("Password updated successfully.");
        }
    }
}