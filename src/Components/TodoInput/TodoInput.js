import React, {useState} from 'react';
import "./TodoInput.css";
import {  useDispatch } from 'react-redux';
import { ADD_TODOS, CHANGE_ALL_COMPLETE} from '../../Actions/ActionTypes';


export default function TodoInput() {
    
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const allToComplete = (isChecked) => {
      dispatch({
        type:CHANGE_ALL_COMPLETE,
        payload:{
          isChecked  
        }   
      })
    }

    const handleAllToComplete =(e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        allToComplete(value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (name === '') return
        dispatch({
          type:ADD_TODOS,
          payload:{
            name
          }
        })
        setName("");
      }

    return (
        <div className="todo-input">
            <input type="checkbox" className="all-complete-checkbox" onChange={handleAllToComplete} data-testid="checkbox-test"/>
            <form onSubmit={handleSubmit}>
                <input
                    className="new-todo"
                    placeholder="What needs to be done ?" 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
             </form>
        </div>
    )
}