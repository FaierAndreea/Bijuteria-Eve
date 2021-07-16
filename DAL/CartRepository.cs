using System;
using System.Text.Json;
using System.Threading.Tasks;
using Entities.Classes;
using Entities.Repositories;
using StackExchange.Redis;

namespace DAL
{
    public class CartRepository : ICartRepository
    {
        private readonly IDatabase _database;

        public CartRepository(IConnectionMultiplexer redis)
        {
            _database = redis.GetDatabase();
        }

        public async Task<bool> DeleteCartAsync(string cartId)
        {
            return await _database.KeyDeleteAsync(cartId);
        }

        public async Task<ShoppingCart> GetCartAsync(string cartId)
        {
            var data = await _database.StringGetAsync(cartId);
            if(data.HasValue) {
                return JsonSerializer.Deserialize<ShoppingCart>(data); 
            }
            return null;
        }

        public async Task<ShoppingCart> UpdateCartAsync(ShoppingCart cart)
        {
            var created = await _database.StringSetAsync(cart.Id, JsonSerializer.Serialize(cart), TimeSpan.FromDays(30));
            if(!created) return null;
            return await GetCartAsync(cart.Id);
        }
    }
}