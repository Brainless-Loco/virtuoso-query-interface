import FormControl  from '@mui/material/FormControl'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateDatasetList, updateQueryNameList, updateSavedQueryList, updateSelectedDatasetName, updateSelectedQuery } from '@/redux/actions/Actions';
import { Autocomplete, TextField } from '@mui/material';
import {database} from '../../firebaseConfig'
import { collection, getDocs } from 'firebase/firestore/lite';


export default function QueryListDropDown() {
  
  const dispatch = useDispatch()

  const datasetNameList = useSelector(state=>state.datasetNames)
  const selectedDataset = useSelector(state=>state.selectedDataset)
  const queryNameList = useSelector(state=>state.queryNameList)


  const updateSelectedQueryInfo = (name)=>dispatch(updateSelectedQuery(name))
  const updateTheSelectedDatasetName = (name)=>dispatch(updateSelectedDatasetName(name))
  const updateTheDatasetList = (list)=>dispatch(updateDatasetList(list))
  const updateAllSavedQueryList = (list)=> dispatch(updateSavedQueryList(list))
  const updateTheQueryNameList = (list)=> dispatch(updateQueryNameList(list))

  const handleQueryNameChange = (event,value)=>{
    if(value!=null && value.length>0) updateSelectedQueryInfo(value)
  }

  const handleDatasetOptionChange = (event, value) => {
    updateTheSelectedDatasetName(value)
    if(value!=null && value.length>0){
      const queryList = collection(database,value);
      getDocs(queryList)
      .then((data) => {
          var queriesArray = data.docs.map((item) => {
              return { ...item.data(), id: item.id }
          });
          updateAllSavedQueryList(queriesArray)
          queriesArray  = queriesArray.map(item=>item.name)
          updateTheQueryNameList(queriesArray)
      })
    }
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
        <FormControl sx={{width:'70%',height:'50px',display:'flex',justifyContent:'space-between',flexDirection:'row',marginBottom:'8px' }}>
          
          <Autocomplete
           sx={{width:'49.5%'}}
            options={datasetNameList}
            onChange={handleDatasetOptionChange}
            renderInput={(params) => (
              <TextField {...params} label="Select a Dataset" />
            )}
          />
          <Autocomplete
            disabled={selectedDataset==null || selectedDataset.length==0}
            sx={{width:'49.5%'}}
            onChange={handleQueryNameChange}
            options={queryNameList}
            renderInput={(params) => (
              <TextField {...params} label="Select a Query" />
            )}
          />
        </FormControl>
  )
}
