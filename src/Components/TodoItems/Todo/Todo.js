import React, {usestate} from 'react';
import styled from 'styled-components';
import "./Todo.css";

export default function Todo({ todo, toggleTodo, deleteTodo}) {

    const handleToggleCheckbox=() => {
        toggleTodo(todo.id)
    }

    const handleDelete = () => {
        deleteTodo(todo.id)
    }


    return (
        <div className='todo-item' >
            <input className="checkbox" type="checkbox" checked={todo.complete}
                onChange={handleToggleCheckbox}
            />
            <div> {todo.complete? <p className="todo-message-completed"> {todo.name} </p> : <p className="todo-message-normal"> {todo.name} </p>  } </div>
            <button className="todo-delete" onClick={handleDelete} > X </button>
        </div>
    )
}
