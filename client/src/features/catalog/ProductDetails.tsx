
import { useParams } from "react-router-dom"
import { Button, Divider, Grid2, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material";
import { useFetchProductDetailsQuery } from "./catalogApi";



export default function ProductDetails() {
  const {id}=useParams();

const {data:product,isLoading}=useFetchProductDetailsQuery(id?+id:0)
if(!product||isLoading) return <div>...Loding</div>
 

 const ProductDetails=[
  {label:'name' ,value:product.name},
    {label:'Descrption' ,value:product.descrption},
      {label:'Type' ,value:product.type},
        {label:'Brand' ,value:product.brand},
          {label:'Qauntity in stock' ,value:product.quantityInstock}

 ]

  return (
    <Grid2 container spacing={6} maxWidth={'lg'} sx={{mx:'auto'}}>
 <Grid2 size ={6}>
 <img src={product?.pictuerUrl} alt={product.name} style={{width:'100%'}}/>
 </Grid2>

<Grid2 size={6}>
<Typography variant="h3">
{product.name}
<Divider sx={{mb:2}}/>

</Typography>
<Typography variant="h4" color="secondary">${(product.price/100).toFixed(2)}</Typography>

<TableContainer>
<Table  sx={{
  '& td':{fontSize:'1rem'}
}}>
  <TableBody>
 
      {ProductDetails.map((details,index)=>(
     <TableRow key={index}> 
    <TableCell sx={{fontWeight:'bold'}}>
     {details.label}
    </TableCell>
     <TableCell sx={{fontWeight:'bold'}}>
     {details.value}
    </TableCell>
    </TableRow>
      ))}
    
  </TableBody>
</Table>
</TableContainer>

<Grid2 container spacing={2 } marginTop={3}>
  <Grid2 size={6}>
 <TextField  variant="outlined" type="number" label="Quantity in basket" fullWidth defaultValue={1}/>

  </Grid2>
<Grid2 size={6}>
<Button color="primary" size='large' variant='contained' fullWidth sx={{height:'55px'}}>
ADD TO Basket
</Button>

</Grid2>

</Grid2>



</Grid2>
    </Grid2>
  )
}
  // useEffect(()=>{
  // fetch(`https://localhost:5001/api/product/${id}`)
  // .then(response=>response.json())
  // .then(data=>setproduct(data))
  // .catch(error=>console.log(error))
  // },[id]);
    // const [product,setproduct]=useState<Product | null>(null);