
import ProductList from "./ProductList";
import type { Product } from "../../app/models/product";
type Props=
{
products:Product[];


};

export default function Catalog({products}:Props) {
  return (
    <>
 
  <ProductList products={products} />
      

    </>
  )
}