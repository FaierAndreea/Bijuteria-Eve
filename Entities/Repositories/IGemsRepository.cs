using System.Collections.Generic;
using System.Threading.Tasks;
using Entities.Classes;
using Entities.Specifications;

namespace Entities.Repositories
{
    public interface IGemsRepository
    {
        Task<IReadOnlyList<Gem>> GetGemsList();
        Task<IReadOnlyList<GemType>> GetGemTypesList();
        Task<IReadOnlyList<GemKarat>> GetGemKaratsList();
        Task<Gem> GetGemById(int id);
        Task<Gem> GetGemWithSpec(ISpecification<Gem> spec);
        Task<IReadOnlyList<Gem>> GetGemListWithSpec(ISpecification<Gem> spec);
        Task<int> CountAsync(ISpecification<Gem> spec);
    }
}