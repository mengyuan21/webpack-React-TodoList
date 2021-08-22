import React, {useReducer, useEffect} from 'react'
import axios from 'axios';
import { BASE_URL } from './fetchData/apiUtils';


const initialState = {
    loading:true,
    error: '',
    post:{}
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error:''
            }
        case 'FETCH_ERROR':
            return {
                loading:false,
                post:{},
                error:'Something went wrong!'
            }   
        default:
            return state     
    }
}

function DataFetching() {

    const [state, dispatch]  = useReducer(reducer, initialState)
    
    useEffect(() => {
        axios
        .get(BASE_URL)
        .then(response => {
            dispatch({
                type:'FETCH_SUCCESS',
                payload:response.data
            })
        })
        .catch(error => {
            dispatch({
                type:'FETCH_ERROR'
            })
        })
    })


    return (
        <div>
            {loading ? 'Loading' : state.post.loading}
            {error ? error : null}
        </div>
    )
}

export default DataFetching
