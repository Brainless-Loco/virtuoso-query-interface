import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Box from '@mui/material/Box';
import Menubar from '@/components/homeComponent/Menubar';
import QueryListDropDown from '@/components/homeComponent/QueryListDropDown';
import Editor from '@monaco-editor/react';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';


import {useEffect, useState} from 'react';
import { Modal } from '@mui/material';



export default function Home() {

  const [sparqlCode, setSparqlCode] = useState(`PREFIX qb: <http://purl.org/linked-data/cube#>
  PREFIX qb4o: <http://purl.org/qb4olap/cubes#>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  SELECT ?agriProductDim_Sector (COUNT(<http://www.w3.org/2001/XMLSchema#float>(?m1)) as ?area_count) 
  WHERE {
  ?o a qb:Observation .
  ?o qb:dataSet <http://www.linked-agriculture-bd.com/data#agricultureForestryDataset> .
  ?o <http://www.linked-agriculture-bd.com/mdProperty#area> ?m1 .
  ?o <http://www.linked-agriculture-bd.com/mdProperty#Sector> ?agriProductDim_Sector .
  }
  GROUP BY ?agriProductDim_Sector
  ORDER BY ?agriProductDim_Sector`);

  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'age', headerName: 'Age', width: 100 },
  ]);
  const [responseTime, setResponseTime] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = ()=>{
    setOpen(true)
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
        onClick={handleOpen}
        
        >Run Query</Button>


      <Modal open={open} onClose={handleClose} sx={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div style={{ width: '95vw', height: '95vh', backgroundColor: 'white', margin: 'auto', padding: '10px', borderRadius: '5px', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',overflow:'auto' }}>
          <h3 style={{marginBottom:'10px'}}>Query Result ({responseTime ? `${responseTime} ms` : '-'})</h3>
          <div style={{ height: '80vh', width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={10} />
          </div>
          <Box sx={{display:'flex',justifyContent:'center'}}>
            <Button variant="contained" color="primary" onClick={handleClose} style={{marginTop: '7px' }}>
              Close
            </Button>
          </Box>
          
        </div>
      </Modal>
          
      </main>
    </>
  )
}
