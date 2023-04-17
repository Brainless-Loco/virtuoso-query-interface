import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Menubar from '@/components/Menubar';
import Button from '@mui/material/Button';
import {database} from '../../firebaseConfig'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore/lite';
import {useEffect} from 'react'
import { Editor } from '@monaco-editor/react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDatasetList } from '@/redux/actions/Actions';


const MyFormComponent = () => {

  const [datasetName, setdatasetName] = useState('');
  const [nameValue, setnameValue] = useState('')
  const [editorValue, seteditorValue] = useState('#Write your SPARQL Code Here')


  const dispatch = useDispatch()

  
  const datasetNameList = useSelector(state=>state.datasetNames)

  const updateTheDatasetList = (list)=>dispatch(updateDatasetList(list))


  const handleDatasetOptionChange = (event, value) => {
    if(value!=null && value.length>0) setdatasetName(value);
  };
  const handleChangeOfDatasetName = (event)=>{
    setdatasetName(event.target.value)
  }
  const editorValueUpdate = (value,event)=>{
    seteditorValue(value)
  }


  const insertData = async () => {
    const collectionRef = collection(database,datasetName);
    addDoc(collectionRef,{'name':nameValue,'Query':editorValue});
    
    const collectionOfDatasetCollectionList = collection(database,'Dataset Name List');
    const q = query(collectionOfDatasetCollectionList,where('name', '==', datasetName));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
        try {
          await addDoc(collectionOfDatasetCollectionList,{'name':datasetName});
        } catch (error) {
          console.error('Error storing unique value:', error);
        }
    }
    setdatasetName('');
    seteditorValue('');
    setnameValue('')

  };

  // Firebase Works
  const collectionOfDatasetCollectionList = collection(database, 'Dataset Name List');

  useEffect(() => {
    const GetDatasetNames = ()=>{
      getDocs(collectionOfDatasetCollectionList)
      .then((data) => {
          var tempDatasetNameList = data.docs.map((item) => {
              return { ...item.data()}
          });
          tempDatasetNameList = tempDatasetNameList.map((item)=> item.name)
          updateTheDatasetList(tempDatasetNameList)
      })
    }
    GetDatasetNames()
  }, [])



  return (
    <>
      <Head>
        <title>Save Query</title>
        <meta name="description" content="A virtuoso query interface" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
          <div style={{display:'flex',justifyContent:'center',marginBottom:'5px'}}>
              <Menubar title="Insert A Query"/>
          </div>
          <Box sx={{width:'100%',padding:'8px',height:'auto',overflow:'hidden',display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Autocomplete
              options={datasetNameList}
              value={datasetName}
              onChange={handleDatasetOptionChange}
              freeSolo
              sx={{width:'49.5%'}}
              renderInput={(params) => (
                <TextField
                    {...params}
                    label="Select a Dataset"
                    InputLabelProps={{ shrink: true }}
                    onChange={handleChangeOfDatasetName}
                  />
                )}
            />
            <TextField value={nameValue} onChange={(newValue)=>{setnameValue (newValue.target.value)}} sx={{width:'49.5%'}} id="name-of-the-query" label="Name" variant="outlined" />
          </Box>
          <div style={{margin:'8px',marginTop:'2px',height:'68vh',border:'1px solid gray',borderRadius:'8px',overflow:'hidden',}}>
              <Editor defaultLanguage='sparql' value={editorValue} onChange={editorValueUpdate}/>
          </div>
          <div style={{display:'flex',justifyContent:'center',marginBottom:'5px'}}>
              <Button
                  disabled={!nameValue.length || !editorValue.length || !datasetName.length}
                  onClick={insertData}
                  sx={{backgroundColor:'#0d4d15',width:'150px',padding:'14px',margin:'auto',color:'white',borderRadius:'5px',fontWeight:'bold',border:'2px solid transparent',
                  '&:hover': 
                      {
                      border:'2px solid #0d4d15',
                      background: "white",
                      color:'#0d4d15'
                      },
                  }}>Submit</Button>
          </div>
          {/* {loading && <Box sx={{ zIndex:'5', position:'absolute',top:'0%',backdropFilter: 'blur(5px)', width:'100%', display: 'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%' }}>
            <h2>Saving the Query</h2><br/>
            <CircularProgress />
          </Box>}
           */}
      </Box>
    </>
  );
};

export default MyFormComponent;
