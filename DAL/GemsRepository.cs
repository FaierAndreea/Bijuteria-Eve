using System.Collections.Generic;
using System.Threading.Tasks;
using Entities.Classes;
using Entities.Repositories;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class GemsRepository : IGemsRepository
    {
        private readonly GemsContext _context;
        public GemsRepository(GemsContext context)
        {
            _context = context;
        }

        public async Task<Gem> GetGemById(int id)
        {
            return await _context.Gems
                .Include(g => g.GemType)
                .Include(g => g.GemKarat)
                .FirstOrDefaultAsync(g => g.Id == id);
        }

        public async Task<IReadOnlyList<GemKarat>> GetGemKaratsList()
        {
            return await _context.GemKarats.ToListAsync();
        }

        public async Task<IReadOnlyList<Gem>> GetGemsList()
        {
            return await _context.Gems
                .Include(g => g.GemType)
                .Include(g => g.GemKarat)
                .ToListAsync();
        }

        public async Task<IReadOnlyList<GemType>> GetGemTypesList()
        {
            return await _context.GemTypes.ToListAsync();
        }
    }
}