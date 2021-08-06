using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DAL;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Entities.Identity;
using DAL.Identity;

namespace API
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var host = CreateHostBuilder(args).Build();
           using (var scope = host.Services.CreateScope())
           {
               var services = scope.ServiceProvider;
               var loggerFactory = services.GetRequiredService<ILoggerFactory>();
               try
               {
                   var context = services.GetRequiredService<GemsContext>();
                   await context.Database.MigrateAsync();
                   await SeedDataClass.SeedAsync(context, loggerFactory);

                   var userManager = services.GetRequiredService<UserManager<AppUser>>();
                   var identityContext = services.GetRequiredService<IdentityContext>();
                   await identityContext.Database.MigrateAsync();
                   await IdentitySeed.SeedUserAsync(userManager);
               }
               catch(Exception ex)
               {
                   var logger = loggerFactory.CreateLogger<Program>();
                   logger.LogError(ex,"An error occured during migration");
               }
           }
           host.Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
