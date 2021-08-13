import React from 'react';
import "./Todo.css";

export default function Todo({todo,toggleTodo,deleteTodo, editTodoItem, todoNameRef}) {

    function handleToggleCheckbox() {
        toggleTodo(todo.id)
    } 

    function handleDelete() {
        deleteTodo(todo.id)
    }

    return (
        <div className='todo-item' >
            <input className="checkbox" type="checkbox" checked={todo.complete}
            onChange={handleToggleCheckbox} 
            />
            <p className="todo" > {todo.name} </p>
            {/* <input className="todo" ref={todoNameRef} type='text' value={todo.name} /> */}
            <button className="todo-delete" onClick={handleDelete} > X </button>
        </div>
    )
}
