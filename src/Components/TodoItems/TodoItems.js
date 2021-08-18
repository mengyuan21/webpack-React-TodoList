import React from 'react';
import Todo from './Todo/Todo';

export default function TodoItems({ todos, displayTodos, toggleTodo, deleteTodo,handleEdit }) {
    
    return (
        displayTodos.map(todo => {
            return (
            <Todo key={todo.id} todos={todos} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} handleEdit={handleEdit}/>
            )
        })
    )
}
