import React from 'react';
import styled from 'styled-components';
import "./Todo.css";

export default function Todo({ todo, toggleTodo, deleteTodo, editTodoItem, todoNameRef }) {

    function handleToggleCheckbox() {
        toggleTodo(todo.id)
    }

    function handleDelete() {
        deleteTodo(todo.id)
    }

    const TodoName = styled.p`
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

    return (
        <div className='todo-item' >
            <input className="checkbox" type="checkbox" checked={todo.complete}
                onChange={handleToggleCheckbox}
            />
            <TodoName> {todo.name} </TodoName>
            {/* <input className="todo" ref={todoNameRef} type='text' value={todo.name} /> */}
            <button className="todo-delete" onClick={handleDelete} > X </button>
        </div>
    )
}
