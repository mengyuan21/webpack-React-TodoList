import React from 'react';
import FilterBotton from './FilterBotton/FilterBotton';
import "./TodoFilter.css";
import {getActiveNum} from '../../selector/selector';
import { useSelector,useDispatch } from 'react-redux';
import { CLEAR_COMPLETED } from '../../Actions/ActionTypes';


export default function TodoFilter() {
    
    const activeLength = useSelector(getActiveNum)
    const dispatch = useDispatch()

    const handleClearCompleted = () => {
        dispatch({
          type:CLEAR_COMPLETED
        })
      }
        
    return (
        <div className="todo-filter" >
            <div className="numbers-left-todo" >
               <p data-testid="number-to-do"> {activeLength} left to do</p> 
            </div>
            <FilterBotton />
            <button className="clear-completed" data-testid="clear-completed"  onClick={handleClearCompleted} > Clear Completed </button>
        </div>
    )
}
