using Ravea.Api.Models;

namespace Ravea.Api.Data
{
    public static class SeedData
    {
        public static void Initialize(RaveaDbContext context)
        {
            if (context.Products.Any())
            {
                return;
            }

            var products = new List<Product>();

            string[] categories = { "Makeup", "Skincare", "Tools" };
            string[] skinTypes = { "Dry", "Oily", "Combination", "Sensitive", "Normal" };
            string[] tones = { "Fair", "Light", "Medium", "Tan", "Deep" };

            for (int i = 1; i <= 120; i++)
            {
                products.Add(new Product
                {
                    Name = $"RAVÉA Product {i}",
                    Description = $"Premium beauty product number {i} for a luxury shopping experience.",
                    Category = categories[i % categories.Length],
                    SkinType = skinTypes[i % skinTypes.Length],
                    Tone = tones[i % tones.Length],
                    Price = 10 + i,
                    ImageUrl = $"https://picsum.photos/seed/ravea{i}/400/500"
                });
            }

            context.Products.AddRange(products);
            context.SaveChanges();
        }
    }
}