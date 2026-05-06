using Microsoft.EntityFrameworkCore;
using Ravea.Api.Models;

namespace Ravea.Api.Data
{
    public class RaveaDbContext : DbContext
    {
        public RaveaDbContext(DbContextOptions<RaveaDbContext> options)
            : base(options)
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductRating> ProductRatings { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<ProductRating>()
                .HasIndex(r => new { r.ProductId, r.UserId })
                .IsUnique();

            modelBuilder.Entity<ProductRating>()
                .HasOne(r => r.Product)
                .WithMany()
                .HasForeignKey(r => r.ProductId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<ProductRating>()
                .HasOne(r => r.User)
                .WithMany(u => u.ProductRatings)
                .HasForeignKey(r => r.UserId)
                .OnDelete(DeleteBehavior.Cascade);
        }
    }
}