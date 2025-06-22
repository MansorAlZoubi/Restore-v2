import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import type { Product } from "../../app/models/product"

type Props =
{

product:Product
}
export default function ProductCard({product}:Props) {
  return (
 <Card 
 elevation={3}>
 
<CardMedia
sx={{
    height:240,
    background:'cover',
    width:280,
    borderRadius:2,
    display:'flex',
    flexDirection:'column'

}}
image={product.pictuerUrl}
title={product.name}
/>
<CardContent>
    <Typography 
    gutterBottom
    variant='subtitle2'
    sx={{textTransform:'uppercase'}}
    >
      {product.name}
    </Typography>
    <Typography 
    variant="h6"
    sx={{color:'secondary.main'}}
    >
   ${(product.price/100).toFixed(2)}
    </Typography>
</CardContent>

<CardActions
sx={{justifyContent:'space-between'}}
>
<Button>
    ADD To Card
</Button>
<Button>
   View
</Button>

</CardActions>
 </Card>
  )
}