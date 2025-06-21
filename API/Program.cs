using API.Data;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContex>(opt =>
{
    opt.UseSqlite(builder.Configuration.GetConnectionString("DefualtConnection"));
 });

var app = builder.Build();

app.MapControllers();

DbIntiailizer.InDb(app);

app.Run();