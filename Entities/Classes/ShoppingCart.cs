using System.Collections.Generic;

namespace Entities.Classes
{
    public class ShoppingCart
    {
        public ShoppingCart()
        {
        }

        public ShoppingCart(string id)
        {
            Id = id;
        }

        public string Id {get; set;}
        public List<ShoppingCartItem> Items {get; set;} = new List<ShoppingCartItem>();
    }
}