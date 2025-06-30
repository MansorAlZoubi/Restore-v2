using API.Data;
using API.Middleware;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContex>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefualtConnection"));
 });

builder.Services.AddCors();
builder.Services.AddTransient<ExceptionMiddleware>();






var app = builder.Build();
app.UseMiddleware<ExceptionMiddleware>();
// app.UseDeveloperExceptionPage();
//configeration 
app.UseCors(opt =>
{
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("https://localhost:3000");
}
);
app.MapControllers();

DbIntiailizer.InDb(app);

app.Run();