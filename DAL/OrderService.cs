using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Entities.Classes;
using Entities.Interfaces;
using Entities.OrderClasses;
using Entities.Repositories;
using Entities.Specifications;

namespace DAL
{
    public class OrderService : IOrderService
    {
        private readonly ICartRepository _cartRepo;
        private readonly IUnitOfWork _uow;
        public OrderService(IUnitOfWork uow, ICartRepository cartRepo)
        {
            _uow = uow;
            _cartRepo = cartRepo;
        }

        public async Task<Order> CreateOrderAsync(string buyerEmail, int deliveryMethodId, string cartId, Address shippingAddress)
        {
            var cart = await _cartRepo.GetCartAsync(cartId);
            var items = new List<OrderItem>();
            foreach (var item in cart.Items)
            {
                var gemItem = await _uow.Repository<Gem>().GetByIdAsync(item.Id);
                var itemOrder = new GemOrdered(gemItem.Id, gemItem.Name, gemItem.Picture);
                var orderItem = new OrderItem(itemOrder, gemItem.Price, item.Quantity);
                items.Add(orderItem);
            }
            var delivery = await _uow.Repository<DeliveryMethod>().GetByIdAsync(deliveryMethodId);
            var subtotal = items.Sum(item => item.Price * item.Quantity);
            var order = new Order(buyerEmail, shippingAddress, delivery, items, subtotal);
            _uow.Repository<Order>().Add(order);
            var response = await _uow.Complete();
            if(response <= 0 ) return null;
            await _cartRepo.DeleteCartAsync(cartId);
            return order;
        }

        public async Task<IReadOnlyList<DeliveryMethod>> GetDeliveryMethodsAsync()
        {
            return await _uow.Repository<DeliveryMethod>().ListAllAsync();
        }

        public async Task<Order> GetOrderByIdAsync(int id, string buyerEmail)
        {
            var spec = new OrdersSpecification(id, buyerEmail);

            return await _uow.Repository<Order>().GetEntityWithSpec(spec);
        }

        public async Task<IReadOnlyList<Order>> GetOrdersForUserAsync(string buyerEmail)
        {
            var spec = new OrdersSpecification(buyerEmail);

            return await _uow.Repository<Order>().ListAsync(spec);
        }
    }
}