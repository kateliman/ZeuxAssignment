using Microsoft.AspNetCore.Mvc;

namespace ZeuxAssignment.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
