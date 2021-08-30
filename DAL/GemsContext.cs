using Microsoft.EntityFrameworkCore;
using Entities.Classes;
using System.Reflection;
using Entities.OrderClasses;
using System.Linq;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using System;

namespace DAL
{
    public class GemsContext : DbContext
    {
        public GemsContext(DbContextOptions<GemsContext> options) : base(options)
        {
        }
        public DbSet<Gem> Gems {get; set;}
        public DbSet<GemType> GemTypes {get; set;}
        public DbSet<GemKarat> GemKarats {get; set;}
        public DbSet<Order> Orders {get; set;}
        public DbSet<OrderItem> OrderItems {get; set;}
        public DbSet<DeliveryMethod> DeliveryMethods {get; set;}
        protected override void OnModelCreating(ModelBuilder modelBuilder){
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
            foreach (var entityType in modelBuilder.Model.GetEntityTypes())
                {
                    var properties = entityType.ClrType.GetProperties().Where(p => p.PropertyType == typeof(DateTimeOffset)
                                                                                || p.PropertyType == typeof(DateTimeOffset?));
                    foreach (var property in properties)
                    {
                        modelBuilder
                            .Entity(entityType.Name)
                            .Property(property.Name)
                            .HasConversion(new DateTimeOffsetToBinaryConverter());
                    }
                }
            }
    }
}