import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, LinearProgress, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../store/store";
import { useDispatch } from "react-redux";
import { setDarkMode } from "./uiSlice";


const midLinks=[
  {title:'catalog',path:'/catalog' },
   {title:'about',path:'/about' },
   {title:'contact',path:'/contact' }
]

const rightLinks=[
   {title:'login',path:'/login' },
   {title:'register',path:'/register' },
]
 const navStyle={
 color: 'inherit',
                  typography: 'h6',
                  textDecoration: 'none',
                  '&:hover': { color: 'gray' },
                  '&.active':{color: '#baecf9'}
 }

export default function NavBar() {
 const {isLoading,darkMode}=useAppSelector(state=>state.ui);
 const dispatch=useDispatch();
 
  return (
 
    <AppBar
    position="fixed">
       <Toolbar sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Box  display={'flex'} alignItems={'center'}>
    <Typography  component={NavLink} to={'/'} variant="h6" sx={navStyle} >Re-Sore</Typography>
       <IconButton onClick={()=>dispatch(setDarkMode())}>
        {darkMode ? <DarkMode />: <LightMode sx={{color:'yellow'}}/>}
        </IconButton>
        </Box>
      


        <List sx={{display:'flex'}}>
   {midLinks.map(({title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={navStyle}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}

        </List>


 <Box display={'flex'} alignItems={'center'}>
<IconButton size="large" sx={{ color: 'inherit'}}>
<Badge badgeContent='4' color="secondary">
<ShoppingCart />
</Badge>
</IconButton>
        <List sx={{display:'flex'}}>
      {rightLinks.map(({title, path }) => (
              <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={navStyle}
              >
                {title.toUpperCase()}
              </ListItem>
            ))}
        </List>
       </Box>


        </Toolbar> 
        {isLoading && (
          <Box sx={{width:'100%'}}>
            <LinearProgress color="secondary"></LinearProgress>
          </Box>
        )}
    </AppBar>
  )
}