using System.Collections.Generic;
using System.Threading.Tasks;
using Entities.Classes;
using Entities.Repositories;
using Entities.Specifications;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GemController : ControllerBase
    {
        private readonly IGemsRepository _repo;
        private readonly IMapper _mapper;
        public GemController(IGemsRepository repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<Pagination<GemReturnDTO>>> GetGemsList([FromQuery] GemParams gemParams)
        {
            var countSpec = new SearchSpecification(gemParams);
            var filterSpec = new FilterSpecification(gemParams);
            var gemList = await _repo.GetGemListWithSpec(filterSpec); 
            var itemsCount = await _repo.CountAsync(countSpec);
            var data = _mapper.Map<IReadOnlyList<Gem>, IReadOnlyList<GemReturnDTO>>(gemList);
            return Ok(new Pagination<GemReturnDTO>(gemParams.PageIndex,gemParams.PageSize,itemsCount,data));
            
            //also paging here
            //return Ok(gemList.Skip((gemParams.PageIndex -1) * gemParams.PageSize).Take(gemParams.PageSize));
        }
        [HttpGet("{id}")]
        public async  Task<ActionResult<GemReturnDTO>> GetGemById(int id)
        {
            var spec = new FilterSpecification(id);
            var gem = await _repo.GetGemWithSpec(spec);
            if(gem==null) return NotFound();
            return _mapper.Map<Gem, GemReturnDTO>(gem);
            //return await _repo.GetGemById(id);
        }
        [HttpGet("types")]
        public async Task<ActionResult<List<GemType>>> GetGemTypesList()
        {
            return Ok(await _repo.GetGemTypesList());
        }
        [HttpGet("karats")]
        public async Task<ActionResult<List<GemKarat>>> GetGemKaratsList()
        {
            return Ok(await _repo.GetGemKaratsList());
        }

        // private readonly GenericRepository<Gem> _gemsrepo;
        // private readonly GenericRepository<GemType> _gemTypesrepo;
        // private readonly GenericRepository<GemKarat> _gemKaratesRepo;
        // public GemController(GenericRepository<Gem> gemsrepo, GenericRepository<GemType> gemTypesrepo, GenericRepository<GemKarat> gemKaratesrepo)
        // {
        //     _gemKaratesRepo = gemKaratesrepo;
        //     _gemTypesrepo = gemTypesrepo;
        //     _gemsrepo = gemsrepo;
        // }

        // [HttpGet]
        // public async Task<ActionResult<List<Gem>>> GetGemsList(){
        //     var gems = await _gemsrepo.ListAll();
        //     return Ok(gems);
        // } 
        // [HttpGet("{id}")]
        // public async Task<ActionResult<Gem>> GetGemById(int id){
        //     return await _gemsrepo.GetById(id);
        // }
        // [HttpGet("types")]
        // public async Task<ActionResult<List<GemType>>> GetGemTypesList(){
        //     var types = await _gemTypesrepo.ListAll();
        //     return Ok(types);
        // }
    }
}