using System;
using System.Threading.Tasks;
using Entities.Repositories;

namespace Entities.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IGenericRepository<T> Repository<T>() where T : class;
        Task<int> Complete();
    }
}