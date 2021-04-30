using System.Collections.Generic;
using System.Threading.Tasks;
using Entities.Classes;

namespace Entities.Repositories
{
    public interface IGemsRepository
    {
        Task<IReadOnlyList<Gem>> GetGemsList();
        Task<IReadOnlyList<GemType>> GetGemTypesList();
        Task<IReadOnlyList<GemKarat>> GetGemKaratsList();
        Task<Gem> GetGemById(int id);
    }
}