import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Box from '@mui/material/Box';
import Menubar from '@/components/homeComponent/Menubar';
import QueryListDropDown from '@/components/homeComponent/QueryListDropDown';
import Editor from '@monaco-editor/react';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { Modal } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import {useState,useEffect} from 'react';
import axios from 'axios';

import {setResponseTime, updateHandleOpenStatus, updateLoadingTStatus } from '@/redux/actions/Actions';


export default function Home() {

  const dispach = useDispatch()

  //states
  const sparqlCode = useSelector(state=>state.sparqlCode)
  const modalOpenStatus = useSelector(state=>state.handleOpenStatus)
  const loading = useSelector(state=>state.loading)
  const responseTime = useSelector(state=>state.responseTime)

  const [rows, setRows] = useState([])
  const [columns, setColumns] = useState([])


  //actions
  const updateLoadingStatus = (val)=>dispach(updateLoadingTStatus())
  const updateModalStatus = ()=>dispach(updateHandleOpenStatus())
  const updateResponseTime = (time)=>dispach(setResponseTime(time))
  

  const executeQuery = async () => {
    if(loading) return
    updateModalStatus()
    updateLoadingStatus()
    
    const start = Date.now();
    const response = await axios.get('/api/execute_query', {
      params: {
        query: encodeURI(sparqlCode)
      }
    })
    const end = Date.now();
    const resTime = end - start;
    updateResponseTime(resTime)

    const cols = response.data.data.head.vars
    const bindings = response.data.data.results.bindings
    
    // // Process the columns
    const tempCols = [{field: 'id', headerName: 'ID',  minWidth: 100,flex:0.3}]
    cols.map(item => {
      tempCols.push({field: item, headerName: item,  minWidth: 330, flex: 1})
    });
    setColumns(tempCols)

    // // Process the Rows
    const tempRows = []
    bindings.map((item, idx) => {
        let obj = {id: idx}
        tempCols.map((c, index) => {
            if(index>0)
              obj = {...obj, [c.field]: item[c.field].value}
        })
        tempRows.push(obj)
    });
    
    setRows(tempRows)

    console.log('Axios response', response)
    updateLoadingStatus()
  }

  return (
    <>
      <Head>
        <title>Query Interface</title>
        <meta name="description" content="A virtuoso query interface" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <Menubar/>
          <QueryListDropDown/>
          
          <Box sx={{border:'1px solid #c2c4c2',height:'70vh',borderRadius:'8px',overflow:'hidden',marginX:'8px'}}>
            <Editor
                defaultLanguage="sparql"
                defaultValue={sparqlCode}/>
          </Box>
          <Button sx={{backgroundColor:'#0d4d15',width:'auto',padding:'14px',margin:'auto',color:'white',borderRadius:'5px',fontWeight:'bold',border:'2px solid transparent',
          '&:hover': 
              {
              border:'2px solid #0d4d15',
              background: "white",
              color:'#0d4d15'
            },
          }}
          onClick={executeQuery}
          
          >Run Query</Button>

      
       <Modal open={modalOpenStatus} onClose={updateModalStatus} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{ width: '95vw', height: '95vh', backgroundColor: 'white', margin: 'auto', padding: '10px', borderRadius: '5px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',overflow:'auto' }}>
          <h3 style={{marginBottom:'10px'}}>Query Result ({responseTime ? `${responseTime} ms` : '-'})</h3>
          <div style={{ height: '80vh', width: '100%' }}>
            <DataGrid rows={rows} columns={columns} disableSelectionOnClick showColumnVerticalBorder showCellVerticalBorder/>
          </div>
          <Box sx={{display:'flex',justifyContent:'center'}}>
            <Button variant="contained" color="primary" onClick={updateModalStatus} style={{marginTop: '7px' }}>
              Close
            </Button>
          </Box>
          
        </div>
      </Modal>
          
      </main>
    </>
  )
}
