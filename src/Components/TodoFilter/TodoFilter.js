import React from 'react';
import FilterBotton from './FilterBotton/FilterBotton';
import "./TodoFilter.css";


export default function TodoFilter({todos, getAllTodos, getActiveTodos, getCompletedTodos, handleClearCompleted}) {
    return (
        <div className="todo-filter" >
            <div className="numbers-left-todo" >
               <p data-testid="number-to-do">{todos.filter(todo => !todo.complete).length} left to do</p> 
            </div>

            <FilterBotton 
            getAllTodos={getAllTodos} 
            getActiveTodos={getActiveTodos}
            getCompletedTodos={getCompletedTodos}
            />

            <button className="clear-completed" data-testid="clear-completed"  onClick={handleClearCompleted} > Clear Completed </button>
        </div>
    )
}
