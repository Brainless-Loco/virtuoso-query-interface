import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menubar from '@/components/homeComponent/Menubar';
import { Editor } from '@monaco-editor/react';

export default function index() {
  return (
    <Box>
        <div style={{display:'flex',justifyContent:'center',marginBottom:'5px'}}>
            <Menubar title="Insert A Query"/>
        </div>
        <div>
            <TextField sx={{width:'50%',marginX:'10px'}} id="name-of-the-query" label="Name" variant="outlined" />
        </div>
        <div style={{margin:'10px',height:'68vh',border:'1px solid gray',borderRadius:'8px',overflow:'hidden',}}>
            <Editor defaultLanguage="sparql"/>
        </div>
        <div style={{display:'flex',justifyContent:'center',marginBottom:'5px'}}>
            <Button sx={{backgroundColor:'#0d4d15',width:'150px',padding:'14px',margin:'auto',color:'white',borderRadius:'5px',fontWeight:'bold',border:'2px solid transparent',
            '&:hover': 
                {
                border:'2px solid #0d4d15',
                background: "white",
                color:'#0d4d15'
                },
            }}>Submit</Button>
        </div>
        
    </Box>
  )
}
