using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using MongoDB.Driver;
using M101DotNet.WebApp.Models;
using M101DotNet.WebApp.Models.Account;
using lmdp.Models;
using System.Web.Http;

namespace M101DotNet.WebApp.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/users")]
    public class AccountController : ApiController
    {
        [HttpGet]
        [Route("Login/{userName}")]
        public async Task<IHttpActionResult> Login(string userName)
        {
            var context = new StopsContext();

            User user = await context.Users.Find(X => X.username == userName).SingleOrDefaultAsync();

            if (user.Id != null)
            {
                return Ok(user);
            }
            else
            {
                return BadRequest();
            }
        }

        [HttpPost]
        [Route("Register/{userName}/{email}")]
        public async Task<IHttpActionResult> AddUser(string userName, string email)
        {
            var context = new StopsContext();
            var user = new User
            {
                active = true,
                email = email,
                fname = "Test",
                lname = "User",
                username = userName
            };

            await context.Users.InsertOneAsync(user);

            if (user.Id != null)
            {
                return Ok(user);
            } else
            {
                return BadRequest();
            }
        }

        [HttpGet]
        [Route("Workload/{userName}")]
        public async Task<IHttpActionResult> GetUser(string userName)
        {

            var context = new StopsContext();
            var user = await context.Users.Find(X => X.username == userName).SingleOrDefaultAsync();
            if (user != null)
            {
                return Ok(user);
            }
            else
            {
                return BadRequest();
            }
        }
    }
}