import FormControl  from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedQuery } from '@/redux/actions/Actions';

export default function QueryListDropDown() {
  
  const dispatch = useDispatch()

  var nameList = useSelector(state=>state.queries)

  const updateSelectedQueryInfo = (name)=>dispatch(updateSelectedQuery(name))

  if(nameList.length>0){  
    nameList = nameList.map((item)=>{
      return item.name
    })
  }

  const handleChange = (event)=>{
    const newValue = event.target.value;
    updateSelectedQueryInfo(newValue)
  }



  return (
        <FormControl sx={{width:'50%',height:'50px',display:'flex',justifyContent:'center'}}>
            <InputLabel id="demo-simple-select-label" sx={{background:'white'}}>Select a Query Type &nbsp;</InputLabel>
            <Select
                labelId="query-type-selection"
                id="query-type-select"
                label="query-type"
                onChange={handleChange}
            >
              <MenuItem value={"newManualSparql"} key={"newManualSparql"}>A New Query</MenuItem>
              {
                nameList.map((item)=>{
                  return <MenuItem key={item} value={item}>{item}</MenuItem>
                })
              }
            </Select>
        </FormControl>
  )
}
