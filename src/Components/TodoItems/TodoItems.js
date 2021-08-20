import React, { useContext } from 'react';
import Todo from './Todo/Todo';

export default function TodoItems({ displayTodos, toggleTodo, deleteTodo, todoNameRef,editTodoItem,dispatch, handleEdit }) {
    
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
            handleEdit = {handleEdit}
            dispatch={dispatch} />
            )
        })
    )
}
