import { SET_COLUMNS, SET_DATA, SET_RESPONSE_TIME, SET_ROWS, UPDATE_ALL_SAVED_QUERY_LIST, UPDATE_DATASET_LIST, UPDATE_HANDLE_OPEN_STATE, UPDATE_LOADING_TIME, UPDATE_MANUAL_WRITING_STATUS, UPDATE_QUERY_NAME_LIST, UPDATE_SELECTED_DATASET_NAME, UPDATE_SELECTED_QUERY, UPDATE_SPARQL_WITH_NON_SELECTION_MANUALLY_WRITTEN_CODE } from "../Types"

export const updateLoadingTStatus = () =>{
    return {
      type:UPDATE_LOADING_TIME
    }
}

export const updateHandleOpenStatus = (val)=>{
  return{
    type: UPDATE_HANDLE_OPEN_STATE
  }
}

export const setData = (data)=>{
  return{
    type:SET_DATA,
    data:data
  }
}

export const setResponseTime = (time)=>{
  return{
    type:SET_RESPONSE_TIME,
    time:time
  }
}

export const setRows = (rows)=>{
  return{
    type:SET_ROWS,
    rows:rows
  }
}

export const setColumn = (columns)=>{
  return{
    type:SET_COLUMNS,
    columns:columns
  }
}

export const updateSelectedQuery = (queryName)=>{
  return{
    type:UPDATE_SELECTED_QUERY,
    queryName:queryName
  }
}

export const updateSavedQueryList = (queryList)=>{
  return{
    type:UPDATE_ALL_SAVED_QUERY_LIST,
    list:queryList
  }
}

export const updateTheManualSparqlCode = (code)=>{
  return{
    type:UPDATE_SPARQL_WITH_NON_SELECTION_MANUALLY_WRITTEN_CODE,
    code:code
  }
}

export const updateManualWritingStatus = (value)=>{
  return{
    type:UPDATE_MANUAL_WRITING_STATUS,
    value:value
  }
}

export const updateSelectedDatasetName = (name)=>{
  return {
    type:UPDATE_SELECTED_DATASET_NAME,
    name:name
  }
}

export const updateDatasetList = (list)=>{
  return{
    type:UPDATE_DATASET_LIST,
    list:list
  }
}

export const updateQueryNameList = (list)=>{
  return{
    type:UPDATE_QUERY_NAME_LIST,
    list:list
  }
}