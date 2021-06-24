using AutoMapper;
using Entities.Classes;

namespace API
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Gem, GemReturnDTO>()
            .ForMember(m => m.GemType, n => n.MapFrom(o => o.GemType.Name))
            .ForMember(m => m.GemKarat, n => n.MapFrom(o => o.GemKarat.Name));
        }
    }
}