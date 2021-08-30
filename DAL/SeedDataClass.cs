using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using Entities.Classes;
using Entities.OrderClasses;
using Microsoft.Extensions.Logging;

namespace DAL
{
    public class SeedDataClass
    {
        public static async Task SeedAsync(GemsContext context, ILoggerFactory loggerFactory)
        {
            try
            {
                if(!context.GemTypes.Any())
                {
                    var typesData = File.ReadAllText("../DAL/SeedData/types.json");
                    var types = JsonSerializer.Deserialize<List<GemType>>(typesData);
                    foreach (var item in types)
                    {
                        context.GemTypes.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
                if(!context.GemKarats.Any())
                {
                    var karatsData = File.ReadAllText("../DAL/SeedData/karats.json");
                    var karats = JsonSerializer.Deserialize<List<GemKarat>>(karatsData);
                    foreach (var item in karats)
                    {
                        context.GemKarats.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
                if(!context.Gems.Any())
                {
                    var gemsData = File.ReadAllText("../DAL/SeedData/gems.json");
                    var gems = JsonSerializer.Deserialize<List<Gem>>(gemsData);
                    foreach (var item in gems)
                    {
                        context.Gems.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
                if(!context.DeliveryMethods.Any())
                {
                    var delivaryData = File.ReadAllText("../DAL/SeedData/delivery.json");
                    var delivery = JsonSerializer.Deserialize<List<DeliveryMethod>>(delivaryData);
                    foreach (var item in delivery)
                    {
                        context.DeliveryMethods.Add(item);
                    }
                    await context.SaveChangesAsync();
                }
            }
            catch(Exception ex)
            {
                var logger = loggerFactory.CreateLogger<SeedDataClass>();
                logger.LogError(ex.Message);
            }
        }
    
    }
}