import React from 'react';
import Todo from './Todo/Todo';

export default function TodoItems({ displayTodos, toggleTodo, deleteTodo, todoNameRef,editTodoItem,dispatch }) {
    
    return (
        displayTodos.map(todo => {
            return (
            <Todo 
            key={todo.id} 
            todo={todo} 
            toggleTodo={toggleTodo} 
            deleteTodo={deleteTodo} 
            todoNameRef={todoNameRef} 
            editTodoItem={editTodoItem}
            dispatch={dispatch} />
            )
        })
    )
}
