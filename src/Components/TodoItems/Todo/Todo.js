import React, {useState} from 'react';
import "./Todo.css";
import { useDispatch } from 'react-redux';
import { DELETE_TODOS, TOGGLE_TODOS } from '../../../Actions/ActionTypes';

export default function Todo({ todo }) {

    const [editTodo, setEditTodo] = useState('');
    const dispatch = useDispatch()

    const handleToggleCheckbox=(id) => {
        dispatch({
            type:TOGGLE_TODOS,
            payload:{
                id
            }
        })
    }

    const handleDelete = () => {
        dispatch ({
            type: DELETE_TODOS,
            payload: {
                id:todo.id
            }
        })
    }

    function handleEdit(name, id) {
        dispatch({
          type: EDIT_TODO,
          payload:{
            name,
            id
          }
        })
      }

    const handleKeydown = (e) => {
       if(e.keyCode===13) {
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
