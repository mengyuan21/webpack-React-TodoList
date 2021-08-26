import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { SET_VISIBILITY_FILTER } from "../../../Actions/ActionTypes";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../../../Actions/TodoFilters';

 
const Button = styled.button`
position: relative;
left: 10px;
border-width: 0;
background: transparent;
outline-width: 0px;
margin-right: 15px;
margin-top:8px;
color: rgb(161, 159, 159);
border-radius:5px;
background-color: white;
&:hover{
    border-width: 1px;
    border-color: rgb(216, 144, 156); 
}
`;


export default function FilterBotton( ) {
    
    const dispatch = useDispatch();

    const changeVisibilityFilter = (filter) => {{
        dispatch ({
            type:SET_VISIBILITY_FILTER,
            filter
        }) 
    }}

    return (
        <div className="filter-buttons" >
                <Button data-testid="filter-button" onClick={() => changeVisibilityFilter(SHOW_ALL)} > All </Button>
                <Button onClick={() => changeVisibilityFilter(SHOW_ACTIVE)} > Active </Button>
                <Button onClick={() => changeVisibilityFilter(SHOW_COMPLETED)} > Completed </Button>
        </div>  
    )
}
