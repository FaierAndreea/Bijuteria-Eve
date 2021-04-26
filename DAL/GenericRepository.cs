using System.Collections.Generic;
using System.Threading.Tasks;
using Entities.Repositories;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class GenericRepository<TEntety> : IGenericRepository<TEntety> where TEntety : class
    {
        private readonly GemsContext _context;
        public GenericRepository(GemsContext context)
        {
            _context = context;
        }

        public async Task<TEntety> GetById(int id)
        {
            return await _context.Set<TEntety>().FindAsync(id);
        }

        public async Task<IReadOnlyList<TEntety>> ListAll()
        {
            return await _context.Set<TEntety>().ToListAsync();
        }
    }
}