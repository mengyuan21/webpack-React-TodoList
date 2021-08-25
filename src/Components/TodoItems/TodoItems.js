import React from 'react';
import Todo from './Todo/Todo';

export default function TodoItems({ displayTodos }) {
    
    return (
        displayTodos.map(todo => {
            return (
            <Todo key={todo.id}  todo={todo}/>
            )
        })
    )
}
