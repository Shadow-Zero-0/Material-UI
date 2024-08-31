
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import CreateIcon from "@mui/icons-material/Create";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SettingsIcon from "@mui/icons-material/Settings";
import Brightness4 from '@mui/icons-material/Brightness4';
import Brightness7 from '@mui/icons-material/Brightness7';
import { Box, Drawer } from "@mui/material";
import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    IconButton
  } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";
const Door = ({mode, setmode,drawerWidth,none,toggle,setnone,settoggle}) => {
  
    const Location = useLocation()
    const navigate = useNavigate();
    const theme = useTheme();
    const arreylist = [
      {text: 'Home',icon:<HomeIcon/>, path:'/'},
      {text: 'Create',icon:<CreateIcon/>, path:'/create'},
      {text: 'Profile',icon:<AccountBoxIcon/>, path:'ffffffff'},
      {text: 'settings',icon:<SettingsIcon/>, path:'ffffffff'}
    ]
    return (
        <Drawer 
        sx={{
           display: {xs:none,sm:'block'},
           
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant={toggle}
        anchor="left"
        open={true}
        onClose={() => {
          settoggle('permanent')
         setnone('none')
        }}
      >
       
          
         
      <Box >
      <List sx={{textAlign:'center'}}>
         <IconButton sx={{ ml: 1 }}onClick={() => {
            setmode(mode === 'light' ? 'dark' : 'light');
            localStorage.setItem('mode',mode==='light'? 'dark':'light')
          }} color="inherit">
        {mode === 'dark' ? <Brightness4/> : <Brightness7 sx={{color:'orange'}}/>}
      </IconButton>
         </List>
      
        <Divider />
        <List >
          {arreylist.map((item) => {
            return(
              <ListItem key={item.text} disablePadding sx={{bgcolor : Location.pathname === item.path ? theme.palette.omar.main : null}}>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
            )
          })}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="LogOut" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      </Drawer>
    );
}

export default Door;
