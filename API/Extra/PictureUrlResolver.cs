using AutoMapper;
using Entities.Classes;
using Microsoft.Extensions.Configuration;

namespace API
{
    public class PictureUrlResolver : IValueResolver<Gem, GemReturnDTO, string>
    {
        private readonly IConfiguration _config;
        public PictureUrlResolver(IConfiguration config)
        {
            _config = config;
        }

        public string Resolve(Gem source, GemReturnDTO destination, string destMember, ResolutionContext context)
        {
            if(!string.IsNullOrEmpty(source.Picture))
            {
                return _config["ApiUrl"]+source.Picture;
            }
            return null;
        }
    }
}