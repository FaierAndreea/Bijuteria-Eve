using Microsoft.EntityFrameworkCore;
using Entities.Classes;
using System.Reflection;

namespace DAL
{
    public class GemsContext : DbContext
    {
        public GemsContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Gem> Gems {get; set;}
        public DbSet<GemType> GemTypes {get; set;}
        public DbSet<GemKarat> GemKarats {get; set;}
        protected override void OnModelCreating(ModelBuilder modelBuilder){
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}