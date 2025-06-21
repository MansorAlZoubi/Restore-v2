using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public  class DbIntiailizer
{
    public static void InDb(WebApplication app)
    {
        using var scope = app.Services.CreateScope();

        var context = scope.ServiceProvider.GetRequiredService<StoreContex>()
       ?? throw new InvalidOperationException("Failed to retrive store context");

        SeedData(context);
     }

    private static void SeedData(StoreContex context)
    {
        context.Database.Migrate();

        if (context.Product.Any()) return;

        var product = new List<Product>
        {
                 new() {
                    Name = "Angular Speedster Board 2000",
                    Descrption =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 20000,
                    PictuerUrl = "/images/products/sb-ang1.png",
                    Brand = "Angular",
                    Type = "Boards",
                    QuantityInstock = 100
                },
                new() {
                    Name = "Green Angular Board 3000",
                    Descrption = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                    Price = 15000,
                    PictuerUrl = "/images/products/sb-ang2.png",
                    Brand = "Angular",
                    Type = "Boards",
                    QuantityInstock = 100
                },
                new() {
                    Name = "Core Board Speed Rush 3",
                    Descrption =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 18000,
                    PictuerUrl = "/images/products/sb-core1.png",
                    Brand = "NetCore",
                    Type = "Boards",
                    QuantityInstock = 100
                },
                new() {
                    Name = "Net Core Super Board",
                    Descrption =
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                    Price = 30000,
                    PictuerUrl = "/images/products/sb-core2.png",
                    Brand = "NetCore",
                    Type = "Boards",
                    QuantityInstock = 100
                },
                new() {
                    Name = "React Board Super Whizzy Fast",
                    Descrption =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 25000,
                    PictuerUrl = "/images/products/sb-react1.png",
                    Brand = "React",
                    Type = "Boards",
                    QuantityInstock = 100
                },
                new() {
                    Name = "Typescript Entry Board",
                    Descrption =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 12000,
                    PictuerUrl = "/images/products/sb-ts1.png",
                    Brand = "TypeScript",
                    Type = "Boards",
                    QuantityInstock = 100
                },
                new() {
                    Name = "Core Blue Hat",
                    Descrption =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1000,
                    PictuerUrl = "/images/products/hat-core1.png",
                    Brand = "NetCore",
                    Type = "Hats",
                    QuantityInstock = 100
                },
                new() {
                    Name = "Green React Woolen Hat",
                    Descrption =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 8000,
                    PictuerUrl = "/images/products/hat-react1.png",
                    Brand = "React",
                    Type = "Hats",
                    QuantityInstock = 100
                },
                new() {
                    Name = "Purple React Woolen Hat",
                    Descrption =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1500,
                    PictuerUrl = "/images/products/hat-react2.png",
                    Brand = "React",
                    Type = "Hats",
                    QuantityInstock = 100
                },
                new() {
                    Name = "Blue Code Gloves",
                    Descrption =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1800,
                    PictuerUrl = "/images/products/glove-code1.png",
                    Brand = "VS Code",
                    Type = "Gloves",
                    QuantityInstock = 100
                },
                new() {
                    Name = "Green Code Gloves",
                    Descrption =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1500,
                    PictuerUrl = "/images/products/glove-code2.png",
                    Brand = "VS Code",
                    Type = "Gloves",
                    QuantityInstock = 100
                },
                new() {
                    Name = "Purple React Gloves",
                    Descrption =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1600,
                    PictuerUrl = "/images/products/glove-react1.png",
                    Brand = "React",
                    Type = "Gloves",
                    QuantityInstock = 100
                },
                new() {
                    Name = "Green React Gloves",
                    Descrption =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1400,
                    PictuerUrl = "/images/products/glove-react2.png",
                    Brand = "React",
                    Type = "Gloves",
                    QuantityInstock = 100
                },
                new() {
                    Name = "Redis Red Boots",
                    Descrption =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 25000,
                    PictuerUrl = "/images/products/boot-redis1.png",
                    Brand = "Redis",
                    Type = "Boots",
                    QuantityInstock = 100
                },
                new() {
                    Name = "Core Red Boots",
                    Descrption =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 18999,
                    PictuerUrl = "/images/products/boot-core2.png",
                    Brand = "NetCore",
                    Type = "Boots",
                    QuantityInstock = 100
                },
                new() {
                    Name = "Core Purple Boots",
                    Descrption =
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                    Price = 19999,
                    PictuerUrl = "/images/products/boot-core1.png",
                    Brand = "NetCore",
                    Type = "Boots",
                    QuantityInstock = 100
                },
                new() {
                    Name = "Angular Purple Boots",
                    Descrption = "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.",
                    Price = 15000,
                    PictuerUrl = "/images/products/boot-ang2.png",
                    Brand = "Angular",
                    Type = "Boots",
                    QuantityInstock = 100
                },
                new() {
                    Name = "Angular Blue Boots",
                    Descrption =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 18000,
                    PictuerUrl = "/images/products/boot-ang1.png",
                    Brand = "Angular",
                    Type = "Boots",
                    QuantityInstock = 100
                },

        };
        context.Product.AddRange(product);
        context.SaveChanges();
    }
}