import React, { useEffect, useState } from 'react';

import { Box, IconButton, Paper, Typography} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
const Home = () => {
  
    const [data1, setdata] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3100/posts')
        .then((response) => response.json())
        .then((data) => setdata(data))
       
    }, [data1]);
    let totle = 0;
    return (
        <Box>
      {data1.map((item) => {
        totle =+ item.price
        return(
            <Paper key={item.id} className='close' >
            <Typography sx={{fontSize:'1.3rem'}} variant="h5">{item.title}</Typography>
            <Typography sx={{mr:'20px', opacity:'0.8'}} variant="h5">${item.price}</Typography>
            <IconButton onClick={() => {
                   fetch(`http://localhost:3100/posts/${item.id}`, {
                    method: "DELETE"})
            }} sx={{position:'absolute',top:'0',right:'0'}}>
                <CloseIcon sx={{fontSize:'20px'}} / >
            </IconButton>
        </Paper >
        )
      })}
      <Typography mt='55px' textAlign='center' variant="h6" > 👉 your Spend $ {totle}</Typography>
     
       
        </Box>
    );
}

export default Home;
