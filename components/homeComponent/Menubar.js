import React from 'react'
import Box from '@mui/material/Box';
import  Typography  from '@mui/material/Typography';

export default function Menubar() {
  return (
    <Box sx={{width:"100%",backgroundColor:'#1d274f',padding:'15px',height:"50px",color:'white',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Typography variant="h5" sx={{fontWeight:'bold',fontFamily:'monospace'}} gutterBottom>
            Virtuoso Query Interface
        </Typography>
    </Box>
  )
}
