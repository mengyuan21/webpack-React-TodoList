import React from 'react';
import styled from 'styled-components';
import "./Todo.css";

export default function Todo({ todo, toggleTodo, deleteTodo}) {

    const handleToggleCheckbox=() => {
        toggleTodo(todo.id)
    }

    const handleDelete = () => {
        deleteTodo(todo.id)
    }

    const handleTodoEdit = () => {

    }

    const TodoNameNormal = styled.p`
        position: relative;
        text-align: start;
        bottom: 20px;
        left: 10px;
        min-width: 400px;
        word-break: break-all;
        display: block;
        font-size: 24px;
        color: #7c7a7a;
    `;

    const TodoNameComplete = styled.p`
        position: relative;
        text-align: start;
        bottom: 20px;
        left: 10px;
        min-width: 400px;
        word-break: break-all;
        display: block;
        font-size: 24px;
        color: rgb(202, 194, 194);
        text-decoration: line-through;
    `;

    return (
        <div className='todo-item' >
            <input className="checkbox" type="checkbox" checked={todo.complete}
                onChange={handleToggleCheckbox}
            />
            <div> {todo.complete? <TodoNameComplete> {todo.name} </TodoNameComplete> : <TodoNameNormal> {todo.name} </TodoNameNormal>  } </div>
            <button className="todo-delete" onClick={handleDelete} > X </button>
        </div>
    )
}
