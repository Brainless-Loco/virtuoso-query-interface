import React from 'react'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import {DataGrid} from '@mui/x-data-grid';
import { useSelector } from 'react-redux';


export default function ModalViewComponent() {

    const loading = useSelector(state=>state.loading)
    const rows = useSelector(state=>state.rows)
    const columns = useSelector(state=>state.columns)


    return (
        <div style={{ height: '80vh', width: '100%' }}>
        {loading? <Box sx={{ display: 'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'100%' }}>
                <h2>Generating the Query Results</h2><br/>
                <CircularProgress />
            </Box>:
            <DataGrid rows={rows} columns={columns} headerClassName="bold-header" disableSelectionOnClick showColumnVerticalBorder showCellVerticalBorder/>
            }
        </div>
  )
}
