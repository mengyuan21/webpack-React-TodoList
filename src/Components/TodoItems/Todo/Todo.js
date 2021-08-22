import React, {useContext, useRef, useState} from 'react';
import "./Todo.css";
import { ACTIONS } from '../../../actions/actions';
import { TodosContext } from "../../../Context/context";

export default function Todo({ todo, handleEdit }) {

    const { dispatch } = useContext(TodosContext);

    const [editTodo, setEditTodo] = useState(todo.name);
    const inputBox = useRef(null)

    const handleToggleCheckbox=() => {
        dispatch({
            type: ACTIONS.TOGGLE_TODO,
            payload: {id: todo.id}
        })
    }

    const handleDelete = () => {
        dispatch({
            type: ACTIONS.DELETE_TODO,
            payload: {id: todo.id}
        })
    }
    
    const handleKeydown = (e) => {
       if(e.keyCode===13) {
           dispatch({
               type: ACTIONS.EDIT_TODO,
               payload: {
                   id: todo.id,
                   name: editTodo
               }
           })
           inputBox.current.blur();
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
                <input
                    className= { todo.complete ? "todo-message-completed":"todo-message-normal" }
                    defaultValue={editTodo}
                    onChange={onChange}
                    onKeyDown={handleKeydown}
                    ref={inputBox}
                />
            </div>
            <button className="todo-delete" onClick={handleDelete} > X </button>
        </div>
    )
}
