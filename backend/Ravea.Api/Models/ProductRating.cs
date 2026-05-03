namespace Ravea.Api.Models
{
    public class ProductRating
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public int RatingValue { get; set; }
        public string UserName { get; set; } = "Guest";
        public DateTime CreatedAt { get; set; } = DateTime.Now;

        public Product Product { get; set; } = null!;
    }
}