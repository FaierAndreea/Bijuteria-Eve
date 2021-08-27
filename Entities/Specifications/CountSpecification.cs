using Entities.Classes;
using Entities.Repositories;

namespace Entities.Specifications
{
    public class CountSpecification : BaseSpecification<Gem>
    {
        public CountSpecification(GemParams gemParams): base(x=> 
            (string.IsNullOrEmpty(gemParams.Search)||x.Name.ToLower().Contains(gemParams.Search))&&
            (!gemParams.KaratId.HasValue || x.GemKaratId ==gemParams.KaratId)&&
            (!gemParams.TypeId.HasValue || x.GemTypeId ==gemParams.TypeId))
        {
        }
    }
}