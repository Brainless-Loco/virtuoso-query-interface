import { SET_COLUMNS, SET_DATA, SET_RESPONSE_TIME, SET_ROWS, UPDATE_ALL_SAVED_QUERY_LIST, UPDATE_HANDLE_OPEN_STATE, UPDATE_LOADING_TIME, UPDATE_SELECTED_QUERY } from "../Types"

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