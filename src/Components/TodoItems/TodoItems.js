import React, { useContext } from 'react';
import Todo from './Todo/Todo';
import { DisplayTodosContext} from '../../App';

export default function TodoItems({ toggleTodo, deleteTodo, todoNameRef,editTodoItem,dispatch }) {
    
    const displayTodos = useContext(DisplayTodosContext)

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
