import React, {useState} from 'react';
import "./TodoInput.css";
import {  useDispatch } from 'react-redux';
import { ADD_TODOS} from '../../Actions/ActionTypes';


export default function TodoInput({ allToComplete }) {
    
    const [name, setName] = useState("");
    const dispatch = useDispatch();

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
        console.log(name)
        setName("");
      }

    return (
        <div className="todo-input">
            <input type="checkbox" className="all-complete-checkbox" onChange={handleAllToComplete} data-testid="checkbox-test"/>
            {/* <button onClick={allToComplete} className="input-button">﹀</button> */}
            <form onSubmit={handleSubmit}>
                <input
                    className="new-todo"
                    placeholder="What needs to be done ?" 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
             </form>
            
            {/* <input className="new-todo" placeholder="What needs to be done ?" type="text" onKeyDown={handleKeydown} onChange={onChange} value={inputValue} data-testid="input-keydown"/> */}
        </div>
    )
}