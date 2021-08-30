using API.Extra;
using AutoMapper;
using Entities.Classes;
using Entities.Identity;
using Entities.OrderClasses;
using Microsoft.Extensions.Configuration;

namespace API
{
    public class MappingProfile : Profile
    {
        
        public MappingProfile()
        {
            CreateMap<Gem, GemReturnDTO>()
            .ForMember(m => m.GemType, n => n.MapFrom(o => o.GemType.Name))
            .ForMember(m => m.GemKarat, n => n.MapFrom(o => o.GemKarat.Name))
            .ForMember(m => m.Picture, n => n.MapFrom<PictureUrlResolver>());
            CreateMap<Entities.Identity.Address, AddressDTO>().ReverseMap();
            CreateMap<AddressDTO, Entities.OrderClasses.Address>().ReverseMap();
            CreateMap<Order, OrderToReturnDTO>()
                .ForMember(d => d.DeliveryMethod, o => o.MapFrom(s => s.DeliveryMethod.Name))
                .ForMember(d => d.ShippingPrice, o => o.MapFrom(s => s.DeliveryMethod.Price));
            CreateMap<OrderItem, OrderItemDTO>()
                .ForMember(d => d.Id, o => o.MapFrom(s =>  s.ItemOrdered.Id))
                .ForMember(d => d.Name, o => o.MapFrom(s =>  s.ItemOrdered.Name))
                .ForMember(d => d.Picture, o => o.MapFrom(s =>  s.ItemOrdered.Picture))
                .ForMember(d => d.Picture, o => o.MapFrom<OrderItemUrlResolver>());
        }
    }
}