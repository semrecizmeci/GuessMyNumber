using GuessMyNumber.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace GuessMyNumber.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        [HttpPost]
        public IActionResult GuessMyNumber(int input)
        {
            
                using (var dbContext = new GuessMyNumberContext())
                {
                    var guess = new Numbers { numbers = input };
                    dbContext.Sayilar.Add(guess);
                    dbContext.SaveChanges();
                Console.WriteLine("kayıt edildi.");
                }

                return Ok();          
            
        }

        public IActionResult GuessMyNumber()
        {
         
            return View();
        }


        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}