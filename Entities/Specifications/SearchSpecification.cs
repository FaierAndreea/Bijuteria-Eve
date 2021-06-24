using Entities.Classes;
using Entities.Repositories;

namespace Entities.Specifications
{
    public class SearchSpecification : BaseSpecification<Gem>
    {
        public SearchSpecification(GemParams gemParams): base(x=> 
            (string.IsNullOrEmpty(gemParams.Search)||x.Name.ToLower().Contains(gemParams.Search))&&
            (!gemParams.KaratId.HasValue || x.GemKaratId ==gemParams.KaratId)&&
            (!gemParams.TypeId.HasValue || x.GemTypeId ==gemParams.TypeId))
        {
        }
    }
}