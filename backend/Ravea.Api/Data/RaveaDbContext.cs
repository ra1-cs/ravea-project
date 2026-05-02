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
    }
}