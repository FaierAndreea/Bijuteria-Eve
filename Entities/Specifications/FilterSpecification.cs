using Entities.Classes;
using Entities.Repositories;

namespace Entities.Specifications
{
    public class FilterSpecification : BaseSpecification<Gem>
    {
        public FilterSpecification(GemParams gemParams) :base(x=> 
            (string.IsNullOrEmpty(gemParams.Search)||x.Name.ToLower().Contains(gemParams.Search))&&
            (!gemParams.KaratId.HasValue || x.GemKaratId ==gemParams.KaratId)&&
            (!gemParams.TypeId.HasValue || x.GemTypeId ==gemParams.TypeId))
        {
            AddInclude(x=>x.GemType);
            AddInclude(x=>x.GemKarat);
            AddOrderBy(x=>x.Name);
            ApplyPaging(gemParams.PageSize*(gemParams.PageIndex-1), gemParams.PageSize);

            if(!string.IsNullOrEmpty(gemParams.Sort))
            {
                switch (gemParams.Sort)
                {
                    case "priceAsc":
                        AddOrderBy(p=>p.Price);
                        break;
                    case "priceDesc":
                        AddOrderByDescending(p=>p.Price);
                        break;
                    default:
                        AddOrderBy(n=>n.Name);
                        break;
                }
            }
        }

        public FilterSpecification(int id) : base(x=> x.Id == id)
        {
            AddInclude(x=>x.GemType);
            AddInclude(x=>x.GemKarat);
        }
        
    }
}