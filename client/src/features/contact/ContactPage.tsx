
import { decrement, increment } from "./counterReducer";
import { Button, ButtonGroup, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../app/store/store";

export default function ContactPage() {
const {data}=useAppSelector(state=> state.counter)
const dispatch=useAppDispatch();
return (
    <>
    
       <Typography variant="h2">
     Contact Page
    </Typography>
    
     <Typography variant="body1">

      Contact{data}
     </Typography>
      <ButtonGroup>

        <Button color="error" onClick={()=>dispatch(decrement(1))}>
          Decremnt

        </Button>
         <Button color="secondary" onClick={()=>dispatch(increment(1))}>
          increment
        </Button>
         <Button color="primary" onClick={()=>dispatch(increment(5))}>
          increment by 5
        </Button>
      </ButtonGroup>

    </>
 

  )
}