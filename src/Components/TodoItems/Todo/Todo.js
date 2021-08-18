import React, {useState} from 'react';
import "./Todo.css";

export default function Todo({ todo, toggleTodo, deleteTodo, handleEdit}) {

    const [editTodo, setEditTodo] = useState('');

    const handleToggleCheckbox=() => {
        toggleTodo(todo.id)
    }

    const handleDelete = () => {
        deleteTodo(todo.id)
    }

    const handleKeydown = (e) => {
       if(e.keyCode===13) {
           console.log(editTodo)
           handleEdit(editTodo,todo.id)
       }
    }

    const onChange = (e) => {
        const editTodo = e.target.value;
        setEditTodo(editTodo)
    }

    return (
        <div className='todo-item' >
            <input className="checkbox" type="checkbox" checked={todo.complete}
                onChange={handleToggleCheckbox}
            />
            <div> 
                {todo.complete? 
                <input className="todo-message-completed" defaultValue={todo.name} onChange={onChange} onKeyDown={handleKeydown} />  : 
                <input className="todo-message-normal" defaultValue={todo.name} onChange={onChange} onKeyDown={handleKeydown}/>  } 
            </div>
            <button className="todo-delete" onClick={handleDelete} > X </button>
        </div>
    )
}
