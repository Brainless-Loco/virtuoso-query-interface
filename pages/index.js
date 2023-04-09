import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Box from '@mui/material/Box';
import Menubar from '@/components/homeComponent/Menubar';
import QueryListDropDown from '@/components/homeComponent/QueryListDropDown';
import Editor from '@monaco-editor/react';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import { Modal } from '@mui/material';


import {useEffect, useState} from 'react';
import getIPV4 from './api/LocalIP';



export default function Home() {

  const [sparqlCode, setSparqlCode] = useState(`PREFIX qb: <http://purl.org/linked-data/cube#>
  PREFIX qb4o: <http://purl.org/qb4olap/cubes#>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  SELECT ?agriGeographyDim_District (MAX(<http://www.w3.org/2001/XMLSchema#float>(?m1)) as ?area_max) 
  WHERE {
  ?o a qb:Observation .
  ?o qb:dataSet <http://www.linked-agriculture-bd.com/data#agricultureForestryDataset> .
  ?o <http://www.linked-agriculture-bd.com/mdProperty#area> ?m1 .
  ?o <http://www.linked-agriculture-bd.com/mdProperty#District> ?agriGeographyDim_District .
  }
  GROUP BY ?agriGeographyDim_District
  ORDER BY ?agriGeographyDim_District`);

  // const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'age', headerName: 'Age', width: 100 },
  ]);
  const [responseTime, setResponseTime] = useState(null);

  const handleClose = () => {setOpen(false);};
  const handleOpen = ()=>{setOpen(true)}

  // start here
  const endpointUrl = 'http://localhost:8890/sparql'; // Replace with your Virtuoso SPARQL endpoint URL
  const graphIRI = 'http://localhost:8890/aggriculturalLinkedData'; // Replace with the IRI of your Virtuoso graph
  
  const url = "http://localhost:8890/sparql?query=PREFIX+qb:+%3Chttp:%2F%2Fpurl.org%2Flinked-data%2Fcube%23%3E%0A++PREFIX+qb4o:+%3Chttp:%2F%2Fpurl.org%2Fqb4olap%2Fcubes%23%3E%0A++PREFIX+skos:+%3Chttp:%2F%2Fwww.w3.org%2F2004%2F02%2Fskos%2Fcore%23%3E%0A++SELECT+%3FagriGeographyDim_District+(MAX(%3Chttp:%2F%2Fwww.w3.org%2F2001%2FXMLSchema%23float%3E(%3Fm1))+as+%3Farea_max)+%0A++WHERE+%7B%0A++%3Fo+a+qb:Observation+.%0A++%3Fo+qb:dataSet+%3Chttp:%2F%2Fwww.linked-agriculture-bd.com%2Fdata%23agricultureForestryDataset%3E+.%0A++%3Fo+%3Chttp:%2F%2Fwww.linked-agriculture-bd.com%2FmdProperty%23area%3E+%3Fm1+.%0A++%3Fo+%3Chttp:%2F%2Fwww.linked-agriculture-bd.com%2FmdProperty%23District%3E+%3FagriGeographyDim_District+.%0A++%7D%0A++GROUP+BY+%3FagriGeographyDim_District%0A++ORDER+BY+%3FagriGeographyDim_District&format=application%2Fsparql-results%2Bjson&namedGraph=http:%2F%2Flocalhost:8890%2FaggriculturalLinkedData";
  
  
  const axios = require('axios')

  axios.get(`http://192.168.0.112/sparql-auth?query=' + ${encodeURIComponent(sparqlCode)}`,{
    auth: {  // This is provided by axios, to perform an HTTP Basic auth
        username: 'dba',
        password: 'dba'
    },
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });

  // console.log(getIPV4())


  //end here

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
