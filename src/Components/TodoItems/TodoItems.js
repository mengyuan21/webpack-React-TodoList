import React from 'react';
import Todo from './Todo/Todo';
import { useSelector} from 'react-redux';
import getTodosByType from '../../selector/selector';


export default function TodoItems() {
    
    const filterTodos = useSelector(getTodosByType)

    return (
        filterTodos.map(todo => {
            return (
            <Todo key={todo.id}  todo={todo}/>
            )
        })
    )
}
