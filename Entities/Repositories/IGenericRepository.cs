using System.Collections.Generic;
using System.Threading.Tasks;

namespace Entities.Repositories
{
    public interface IGenericRepository<TEntety> where TEntety : class
    {
        Task<IReadOnlyList<TEntety>> ListAll();
        Task<TEntety> GetById(int id);
    }
}