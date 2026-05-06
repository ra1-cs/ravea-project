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
    }
}