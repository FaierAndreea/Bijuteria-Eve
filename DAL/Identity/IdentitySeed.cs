using System.Linq;
using System.Threading.Tasks;
using Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace DAL.Identity
{
    public class IdentitySeed
    {
        public static async Task SeedUserAsync(UserManager<AppUser> userManager){
            if(!userManager.Users.Any()){
                var user = new AppUser {
                    DisplayName = "Andreea",
                    Email = "andreea@test.com",
                    UserName = "andreea@test.com",
                    Address = new Address {
                        FirstName = "Andreea",
                        LastName = "Andreea",
                        City = "Drobeta Turnu Severin",
                        Street = "Unirii",
                        StreetNumber = 1,
                        Details = "detalii",
                        ZipCode = "212121"
                    }
                };
                await userManager.CreateAsync(user, "Test1!2@3#");
            }
        }
    }
}