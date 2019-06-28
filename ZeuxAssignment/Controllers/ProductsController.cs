using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using ZeuxAssignment.Models;

namespace ZeuxAssignment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<Product>> Get()
        {
            var product = new Product
            {
                Name = "Name of investment",
                ProductType = Enums.ProductTypeEnum.Savings.ToString(),
                Price = 403.20M,
                Returns = 2.34M
            };
            var result = new List<Product>();
            for (int i = 0; i < 10; i++)
            {
                result.Add(product);
            }
            return result;
        }
    }
}
