
import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./catalogApi";


export default function Catalog() {
  const {data,isLoading}=useFetchProductsQuery()
  if(isLoading || !data) return <div>Lodong ...</div>
  return (
    <>
 
  <ProductList products={data} />
      

    </>
  )
}
// {products}:Props
// type Props=
// {
// products:Product[];


// };
//  const [products,setProducts]= useState<Product[]>([]);

//    useEffect(() =>
//    {
//    fetch('https://localhost:5001/api/Product')
//    .then(Response => Response.json()
//    .then(data => setProducts(data)));},[]);