
import ProductList from "./ProductList";
import type { Product } from "../../app/models/product";
import { useEffect, useState } from "react";


export default function Catalog() {
   const [products,setProducts]= useState<Product[]>([]);

   useEffect(() =>
   {
   fetch('https://localhost:5001/api/Product')
   .then(Response => Response.json()
   .then(data => setProducts(data)));},[]);
  return (
    <>
 
  <ProductList products={products} />
      

    </>
  )
}
// {products}:Props
// type Props=
// {
// products:Product[];


// };