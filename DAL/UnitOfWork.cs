using System;
using System.Collections;
using System.Threading.Tasks;
using Entities.Interfaces;
using Entities.Repositories;

namespace DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly GemsContext _context;
        private Hashtable _repositories;
        public UnitOfWork(GemsContext context)
        {
            _context = context;
        }

        public async Task<int> Complete()
        {
            return await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }

        public IGenericRepository<T> Repository<T>() where T : class
        {
            if(_repositories == null) _repositories = new Hashtable();

            var type = typeof(T).Name;

            if (!_repositories.ContainsKey(type))
            {
                var repositoryType = typeof(GenericRepository<>);
                var repositoryInstance = Activator.CreateInstance(repositoryType.MakeGenericType(typeof(T)), _context);

                _repositories.Add(type, repositoryInstance);
            }

            return (IGenericRepository<T>) _repositories[type];
        }
    }
}