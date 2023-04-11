import { UPDATE_LOADING_TIME, UPDATE_HANDLE_OPEN_STATE, SET_ROWS, SET_DATA, SET_RESPONSE_TIME, SET_COLUMNS } from "../Types";

const initialState = {
    loading:false,
    sparqlCode:`PREFIX qb: <http://purl.org/linked-data/cube#>
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
    ORDER BY ?agriGeographyDim_District`,
    handleOpenStatus:false,
    data:[],
    rows:[],
    columns:[],
    responseTime:0,
};

export default (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_LOADING_TIME:{
            return{
                ...state,
                loading: !state.loading
            }
        }
        case UPDATE_HANDLE_OPEN_STATE:{
            return{
                ...state,
                handleOpenStatus:!state.handleOpenStatus
            }
        }
        case SET_DATA:{
            return{
                ...state,
                data:action.data
            }
        }
        case SET_RESPONSE_TIME:{
            return{
                ...state,
                responseTime:action.time
            }
        }
        case SET_ROWS:{
            return{
                ...state,
                rows:action.rows
            }
        }
        case SET_COLUMNS:{
            return{
                ...state,
                columns:action.columns
            }
        }





        default:{
        return state;
        }
    }
};