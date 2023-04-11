import { SET_COLUMNS, SET_DATA, SET_RESPONSE_TIME, SET_ROWS, UPDATE_HANDLE_OPEN_STATE, UPDATE_LOADING_TIME } from "../Types"

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