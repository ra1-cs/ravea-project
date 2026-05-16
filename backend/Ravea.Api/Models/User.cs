namespace Ravea.Api.Models
{
    public class User
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;

        public string? SkinType { get; set; }
        public string? SkinTone { get; set; }

        public ICollection<ProductRating> ProductRatings { get; set; } = new List<ProductRating>();
        public ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();
        public ICollection<Order> Orders { get; set; } = new List<Order>();

        public string? ResetCode { get; set; }
public DateTime? ResetCodeExpiresAt { get; set; }
    }
}