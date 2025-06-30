import { Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, Typography } from "@mui/material";
import { useLazyGet400ErrorQuery, useLazyGet401ErrorQuery, useLazyGet404ErrorQuery, useLazyGet500ErrorQuery, useLazyGetvalidationErrorQuery } from "./errorapi"
import { useState } from "react";

export default function AboutPage() {

  const [validationerrors,setvalidationerrors]= useState<string[]>([])


  const [tigger400]=useLazyGet400ErrorQuery();
   const [tigger401]=useLazyGet401ErrorQuery();
    const [tigger500]=useLazyGet500ErrorQuery();
     const [tigger404]=useLazyGet404ErrorQuery();
      const [tiggervaldatin]=useLazyGetvalidationErrorQuery();

  const GetVa= async ()=>{
    try {
      await tiggervaldatin().unwrap();
    } catch (error: unknown) {
      if(error && typeof error ==='object' && 'message' in error && typeof (error as {message:unknown }).message==='string'){

      const errorArray=(error as {message:string}).message.split(',');
      setvalidationerrors(errorArray);
      }
     
      
    }
  }
  
      return (
   <Container maxWidth='lg'>
<Typography gutterBottom variant='h3'>Error of testing</Typography>
<ButtonGroup fullWidth>
<Button variant='contained' onClick={()=>tigger400().catch(err=>console.log(err))} >
Error tigger400

</Button>

<Button variant='contained' onClick={()=>tigger401().catch(err=>console.log(err))} >
Error tigger401

</Button>
<Button variant='contained' onClick={()=>tigger500().catch(err=>console.log(err))} >
Error tigger500

</Button>
<Button variant='contained' onClick={()=>tigger404().catch(err=>console.log(err))} >
Error tigger404

</Button>
<Button variant='contained' onClick={GetVa} >
Error tiggervaldatin

</Button>
</ButtonGroup>
  {validationerrors.length>0 && (
    <Alert severity="error"> 
<AlertTitle>
  validationerrors
  <List>
    {validationerrors.map(err=>(
<ListItem key={err}>
{err}
</ListItem>

    ))}
  </List>
</AlertTitle>
    </Alert>
  )}

   </Container>


  )
}