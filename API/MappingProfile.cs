using AutoMapper;
using Entities.Classes;
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
        }
    }
}