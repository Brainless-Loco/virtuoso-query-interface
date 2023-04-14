import React from 'react'
import Box from '@mui/material/Box';
import { Editor } from '@monaco-editor/react';
import { useDispatch, useSelector } from 'react-redux';
import { updateManualWritingStatus, updateTheManualSparqlCode } from '@/redux/actions/Actions';

export default function EditorComponent() {

    const dispatch = useDispatch()

    const sparqlCode = useSelector(state=>state.sparqlCode);

    const sparqlCodeUpdate = (code)=>{dispatch(updateTheManualSparqlCode(code))}
    const manualWritingStateUpdate = (value)=>{dispatch(updateManualWritingStatus(value))}

    const editorValueUpdate = (value,event)=>{
        manualWritingStateUpdate(true)
        sparqlCodeUpdate(value)
    }

    return (
        <Box sx={{border:'1px solid #c2c4c2',height:'70vh',borderRadius:'8px',overflow:'hidden',marginX:'8px'}}>
            <Editor
                defaultLanguage="sparql"
                value={sparqlCode}
                onChange={editorValueUpdate}
                />
        </Box>
    )
}
