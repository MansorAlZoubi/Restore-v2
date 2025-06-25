import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
type Props=
{
toggleDarkMode:() => void;
darkmode:boolean;
}

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

export default function NavBar({toggleDarkMode,darkmode}:Props) {

 
  return (
 
    <AppBar
    position="fixed">
       <Toolbar sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <Box  display={'flex'} alignItems={'center'}>
    <Typography  component={NavLink} to={'/'} variant="h6" sx={navStyle} >Re-Sore</Typography>
       <IconButton onClick={toggleDarkMode}>
        {darkmode ? <DarkMode />: <LightMode sx={{color:'yellow'}}/>}
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
    </AppBar>
  )
}