import React, {useContext, useRef, useState} from 'react';
import "./Todo.css";
import { ACTIONS } from '../../../actions/actions';
import { TodosContext } from "../../../Context/context";
import { deleteTodos, updateTodos } from "../../../fetchData/apiUtils";

export default function Todo({ todo }) {

    const { dispatch } = useContext(TodosContext);

    const [editTodo, setEditTodo] = useState(todo.name);
    const inputBox = useRef(null)

    const handleToggleCheckbox=() => {
        updateTodos(todo.id, {complete: !todo.complete}).then((returnTodo) => {
            dispatch({
                type: ACTIONS.TOGGLE_TODO,
                payload: { todo: returnTodo }
            })
        })
    }

    const handleDelete = () => {
        deleteTodos(todo.id).then(() => {
            dispatch({
                type: ACTIONS.DELETE_TODO,
                payload: {id: todo.id}
            })
        })
    }
    
    const handleKeydown = (e) => {
       if(e.keyCode===13) {
           updateTodos(todo.id, { name: editTodo }).then((returnTodo) => {
               dispatch({
                   type: ACTIONS.EDIT_TODO,
                   payload: { todo: returnTodo }
               })
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
