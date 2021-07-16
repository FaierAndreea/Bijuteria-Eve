using System.Threading.Tasks;
using Entities.Classes;

namespace Entities.Repositories
{
    public interface ICartRepository
    {
        Task<ShoppingCart> GetCartAsync(string cartId);
        Task<ShoppingCart> UpdateCartAsync(ShoppingCart cart);
        Task<bool> DeleteCartAsync(string cartId);
    }
}