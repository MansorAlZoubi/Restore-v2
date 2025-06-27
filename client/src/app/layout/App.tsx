import { Box, Container, createTheme, CssBaseline, ThemeProvider,  } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../store/store";





function App() {
 
const {darkMode}=useAppSelector(
  state=>state.ui

);

  const plleteType=darkMode?'dark':'light'
  const theme=createTheme({
    palette:{
      mode:plleteType,
      background:
      {
         default:(plleteType ==='light')? '#eaeaea': '#121212'

      }

    }
    });


  return (
    <ThemeProvider theme={theme} >
      <CssBaseline/>
     <NavBar />
     <Box
     sx={{minHeight:'100',background:darkMode ? 'radial-gradient(circle,#1e3aBa,#111B27)'
      :'radial-gradient(circle,#baecf9,#f0f9ff)',
      py:6
     }}
     >
  <Container 
    maxWidth='xl'
    sx={{mt:8}}
    >
      
      <Outlet/>
      </Container>
     </Box>
  
    </ThemeProvider>
  )
}

export default App
/* <Box
display={'flex'}
justifyContent={'center'}
gap={3}
marginY={3}
>
<Typography variant="h4">Re-Store</Typography>
     <Button variant='contained' onClick={addProduct}>
          AddProduct
       </Button>
        

</Box> */
     // const addProduct = () =>{
  //   setProducts(PrevState => 
  //     [...PrevState, 
  //     {
  //     id:PrevState.length+1,
  //     descrption:'test',
  //     name:'product '+ (PrevState.length + 1),
  //     price: (PrevState.length * 100)+100 ,
  //     quantityInstock:100,
  //     pictuerUrl:'https://picsum.photos/200',
  //     type:'test',
  //     brand:'test'

  //   } 
  // ])}; 