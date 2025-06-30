using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
    [HttpGet("not-found")]
    public IActionResult GetNotFound()
    {
        return NotFound();
    }

    [HttpGet("bad-request")]
    public IActionResult GetBadRequset()
    {
        return BadRequest("Bad requset");
    }

    [HttpGet("unauthorized")]
    public IActionResult Getunauthorised()
    {
        return Unauthorized();
    }

    [HttpGet("validation-error")]
    public IActionResult GetValdtionError()
    {
        ModelState.AddModelError("Problem 1", "This the first problem");
        ModelState.AddModelError("Problem 2", "This the second problem");
        return ValidationProblem();
    }
    
    
      [HttpGet("server-error")]
    public IActionResult GetServerError()
    {
        throw new Exception("this is the server Error") ;
    }

}
