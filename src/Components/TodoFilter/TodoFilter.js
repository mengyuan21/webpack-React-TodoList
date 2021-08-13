import React from 'react';
import "./TodoFilter.css";

export default function TodoFilter({todos, getAllTodos, getActiveTodos, getCompletedTodos, handleClearCompleted}) {
    return (
        <div className="todo-filter" >
            <div className="numbers-left-todo" >
                {todos.filter(todo => !todo.complete).length} left to do
            </div>

            <div className="filter-buttons" >
                <button className="filter-button" id='all' onClick={getAllTodos} > All </button>
                <button className="filter-button" id='active' onClick={getActiveTodos} > Active </button>
                <button className="filter-button" id='completed' onClick={getCompletedTodos} > Completed </button>
            </div>

            <button className="clear-completed" onClick={handleClearCompleted} > Clear Completed </button>
        </div>
    )
}
