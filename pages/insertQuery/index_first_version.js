import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menubar from '@/components/Menubar';
import { Editor } from '@monaco-editor/react';
import {useState} from 'react'
import Head from 'next/head';
import {database} from '../../firebaseConfig'
import { collection, addDoc } from 'firebase/firestore/lite';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { updateLoadingTStatus } from '@/redux/actions/Actions';


export default function Index() {

    const [nameValue, setnameValue] = useState('')
    const [editorValue, seteditorValue] = useState('# Write or Paste you SPARQL Code here')

    const loading = useSelector(state=>state.loading)
    const dispatch = useDispatch()

    const updateLoading = ()=>dispatch(updateLoadingTStatus())

    const editorValueUpdate = (value,event)=>{
        seteditorValue(value)
    }
    const dbInstances = collection(database, 'savedQueries');
    const saveQuery = ()=>{
        updateLoading()
        addDoc(dbInstances, {
            Query: editorValue,
            name: nameValue
        })
        seteditorValue('')
        setnameValue('')
        updateLoading()
    }

    return (
        <>
            <Head>
                <title>Save Query</title>
                <meta name="description" content="A virtuoso query interface" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box>
                <div style={{display:'flex',justifyContent:'center',marginBottom:'10px'}}>
                    <Menubar title="Insert A Query"/>
                </div>
                <div>
                    <TextField value={nameValue} onChange={(newValue)=>{setnameValue (newValue.target.value)}} sx={{width:'50%',marginX:'10px'}} id="name-of-the-query" label="Name" variant="outlined" />
                </div>
                <div style={{margin:'10px',height:'68vh',border:'1px solid gray',borderRadius:'8px',overflow:'hidden',}}>
                    <Editor defaultLanguage='sparql' value={editorValue} onChange={editorValueUpdate}/>
                </div>
                <div style={{display:'flex',justifyContent:'center',marginBottom:'5px'}}>
                    <Button
                        disabled={!nameValue.length || !editorValue.length}
                        onClick={saveQuery}
                        sx={{backgroundColor:'#0d4d15',width:'150px',padding:'14px',margin:'auto',color:'white',borderRadius:'5px',fontWeight:'bold',border:'2px solid transparent',
                        '&:hover': 
                            {
                            border:'2px solid #0d4d15',
                            background: "white",
                            color:'#0d4d15'
                            },
                        }}>Submit</Button>
                </div>
                {loading && <Box sx={{ zIndex:'5', position:'absolute',top:'0%',backdropFilter: 'blur(5px)', width:'100%', display: 'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%' }}>
                  <h2>Saving the Query</h2><br/>
                  <CircularProgress />
                </Box>}
                
            </Box>
        </>
    )
}
