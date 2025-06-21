using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController(StoreContex contex) : ControllerBase
    {

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()  
        {
            return await contex.Product.ToListAsync();
        }
        [HttpGet("{id}")]
        public async Task< ActionResult<Product>> GetProduct(int id)
        {
            var product = await contex.Product.FindAsync(id);
            if (product == null) return NotFound();
            return product;
         }
    };
}