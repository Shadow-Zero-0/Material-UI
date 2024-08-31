import React, { useState } from "react";

import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  IconButton,
  AppBar
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { cyan } from "@mui/material/colors";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Door from "./Door";
import MenuIcon from '@mui/icons-material/Menu';
const Root = () => {

  const drawerWidth = 240;

  const [mode, setmode] = React.useState( localStorage.getItem('mode') === null
  ? "light"
  : localStorage.getItem('mode') === "light"
  ? "light"
  : "dark",);

  
  const darkTheme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
        omar:{
          main : cyan[100]
        }
           
         
          }
        : {
           
          omar:{
            main : cyan[900]
          }
          }),
    },
  });
  const [toggle, settoggle] = useState("permanent");
 const [none, setnone] = useState('none');
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar
        sx={{ width:  {sm:`calc(100% - ${drawerWidth}px)`}, ml:{sm:`${drawerWidth}px`} }}
        position="static"
      >
        <Toolbar>
          <IconButton sx={{display: {xs:'biock',sm:'none'}}}onClick={() => {
            setnone('block')
            settoggle("temporary")
          }} >
            <MenuIcon/>
          </IconButton>
          <Link
            sx={{ flexGrow: 1, "&:hover": { fontSize: "17px" } }}
            underline="none"
            color="inherit"
            href="/"
          >
            My expenses
          </Link>
          <Typography
            variant="p"
            sx={{ mr: 1, fontSize: "20px" }}
            color="inherit"
          >
            shadow
          </Typography>
          <Avatar alt="Remy Sharp" src="./1.png" />
        </Toolbar>
      </AppBar>
      <Door mode={mode}  setmode={setmode} drawerWidth={drawerWidth} none={none}toggle={toggle}setnone={setnone}settoggle={settoggle}/>
      <Box
        sx={{
          mt: "40px",
          ml: {sm:`${drawerWidth}px`},
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Outlet />
    

      </Box>
    </ThemeProvider>
  );
};

export default Root;