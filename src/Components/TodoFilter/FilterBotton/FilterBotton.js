import React from 'react';
import "./FilterBotton.css"

export default function FilterBotton({getAllTodos, getActiveTodos, getCompletedTodos}) {

    return (
        <div className="filter-buttons" >
                <button onClick={getAllTodos} > All </button>
                <button onClick={getActiveTodos} > Active </button>
                <button onClick={getCompletedTodos} > Completed </button>
        </div>  
    )
}
