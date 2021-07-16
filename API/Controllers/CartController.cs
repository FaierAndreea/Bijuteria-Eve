using System.Threading.Tasks;
using Entities.Classes;
using Entities.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CartController : ControllerBase
    {
        private readonly ICartRepository _cartRepository;
        public CartController(ICartRepository cartRepository)
        {
            _cartRepository = cartRepository;
        }

        [HttpGet]
        public async Task<ActionResult<ShoppingCart>> GetCartById(string cartId){
            var cart = await _cartRepository.GetCartAsync(cartId);
            return Ok(cart ?? new ShoppingCart(cartId));
        }

        [HttpPost]
        public async Task<ActionResult<ShoppingCart>> UpdateCart(ShoppingCart cart){
            var updateCart = await _cartRepository.UpdateCartAsync(cart);
            return Ok(updateCart);
        }

        [HttpDelete]
        public async Task DeleteCart(string cartId){
            await _cartRepository.DeleteCartAsync(cartId);
        }
    }
}