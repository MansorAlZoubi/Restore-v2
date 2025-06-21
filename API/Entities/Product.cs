
namespace API.Entities;

public class Product
{
public int Id { get; set; }
public required string Name { get; set; }
public required string Descrption { get; set; }
public long Price { get; set; }
public required string PictuerUrl { get; set; }
public required string Type { get; set; }
public required string Brand { get; set; }
public int QuantityInstock { get; set; }
}