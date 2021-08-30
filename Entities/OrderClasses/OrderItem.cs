namespace Entities.OrderClasses
{
    public class OrderItem
    {
        public OrderItem()
        {
        }

        public OrderItem(GemOrdered itemOrdered, decimal price, int quantity)
        {
            ItemOrdered = itemOrdered;
            Price = price;
            Quantity = quantity;
        }

        public int Id { get; set;}
        public GemOrdered ItemOrdered { get; set;}
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}