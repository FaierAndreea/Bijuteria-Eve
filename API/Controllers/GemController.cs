using System.Collections.Generic;
using System.Threading.Tasks;
using DAL;
using Entities.Classes;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GemController : ControllerBase
    {
        private readonly GenericRepository<Gem> _gemsrepo;
        private readonly GenericRepository<GemType> _gemTypesrepo;
        private readonly GenericRepository<GemKarat> _gemKaratesRepo;
        public GemController(GenericRepository<Gem> gemsrepo, GenericRepository<GemType> gemTypesrepo, GenericRepository<GemKarat> gemKaratesrepo)
        {
            _gemKaratesRepo = gemKaratesrepo;
            _gemTypesrepo = gemTypesrepo;
            _gemsrepo = gemsrepo;
        }

        [HttpGet]
        public async Task<ActionResult<List<Gem>>> GetGemsList(){
            var gems = await _gemsrepo.ListAll();
            return Ok(gems);
        } 
        [HttpGet("{id}")]
        public async Task<ActionResult<Gem>> GetGemById(int id){
            return await _gemsrepo.GetById(id);
        }
        [HttpGet("types")]
        public async Task<ActionResult<List<GemType>>> GetGemTypesList(){
            var types = await _gemTypesrepo.ListAll();
            return Ok(types);
        }
    }
}