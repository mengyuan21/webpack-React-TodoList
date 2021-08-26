import React from 'react';
import FilterBotton from './FilterBotton/FilterBotton';
import "./TodoFilter.css";
import {getActiveNum} from '../../selector/selector';
import { useSelector } from 'react-redux';



export default function TodoFilter({ handleClearCompleted}) {
    
    const activeLength = useSelector(getActiveNum)
        
    return (
        <div className="todo-filter" >
            <div className="numbers-left-todo" >
               <p data-testid="number-to-do"> {activeLength} left to do</p> 
            </div>
            <FilterBotton 
            />
            <button className="clear-completed" data-testid="clear-completed"  onClick={handleClearCompleted} > Clear Completed </button>
        </div>
    )
}
