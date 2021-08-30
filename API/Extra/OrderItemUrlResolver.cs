using AutoMapper;
using Entities.OrderClasses;
using Microsoft.Extensions.Configuration;

namespace API.Extra
{
    public class OrderItemUrlResolver : IValueResolver<OrderItem, OrderItemDTO, string>
    {
        private readonly IConfiguration _config;
        public OrderItemUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(OrderItem source, OrderItemDTO destination, string destMember, ResolutionContext context)
        {
            if (!string.IsNullOrEmpty(source.ItemOrdered.Picture))
            {
                return _config["ApiUrl"] + source.ItemOrdered.Picture;
            }

            return null;
        }
    }
}