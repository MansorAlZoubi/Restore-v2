import { DarkMode, LightMode } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
type Props=
{
toggleDarkMode:() => void;
darkmode:boolean;
}
export default function NavBar({toggleDarkMode,darkmode}:Props) {

 
  return (
 
    <AppBar
    position="fixed">
       <Toolbar>
        <Typography variant="h6" >Re-Sore</Typography>
       <IconButton onClick={toggleDarkMode}>
        {darkmode ? <DarkMode />: <LightMode sx={{color:'yellow'}}/>}
       </IconButton>
        </Toolbar> 
    </AppBar>
  )
}