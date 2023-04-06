import FormControl  from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import Box from '@mui/material/Box';
import React from 'react'

export default function QueryListDropDown() {
  return (
    <Box sx={{width:'100%',padding:'15px',height:'auto',overflow:'hidden'}}>
        <FormControl sx={{width:'50%'}}>
            <InputLabel id="demo-simple-select-label" sx={{background:'white',marginLeft:'0px'}}>Select a Query Type&nbsp;</InputLabel>
            <Select
                labelId="query-type-selection"
                id="query-type-select"
                label="query-type"
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem> 
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    </Box>
  )
}
