using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

 public class StoreContex(DbContextOptions options) : DbContext(options)
{
    public DbSet<Product> Product { get; set; }
}
