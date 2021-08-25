import React from 'react';
import FilterBotton from './FilterBotton/FilterBotton';
import "./TodoFilter.css";
import { useSelector } from 'react-redux';

const selectTodos = todos => todos

export default function TodoFilter({getAllTodos, handler, handleClearCompleted}) {
    
    const todos = useSelector(selectTodos)
    

    return (
        <div className="todo-filter" >
            <div className="numbers-left-todo" >
               <p data-testid="number-to-do">{todos.filter(todo => !todo.complete).length} left to do</p> 
            </div>

            <FilterBotton 
            handler={handler}
            />

            <button className="clear-completed" data-testid="clear-completed"  onClick={handleClearCompleted} > Clear Completed </button>
        </div>
    )
}
