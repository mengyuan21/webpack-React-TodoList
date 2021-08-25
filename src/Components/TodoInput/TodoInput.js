import React, {useState} from 'react';
import "./TodoInput.css";
import {  useDispatch } from 'react-redux';


export default function TodoInput({ allToComplete }) {
    
    const [inputValue, setInputValue] = useState('');
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
        setName("");
      }

    const handleKeydown =(e) => {
        if (e.keyCode===13) {
          setInputValue('')
          return handleSubmit(inputValue);
        }
    }

    //input 绑定onChange
    const onChange = (e) => {
        const inputValue = e.target.value;
        setInputValue(inputValue);
    }

    return (
        <div className="todo-input">
            <input type="checkbox" className="all-complete-checkbox" onChange={handleAllToComplete} data-testid="checkbox-test"/>
            {/* <button onClick={allToComplete} className="input-button">﹀</button> */}
            <input className="new-todo" placeholder="What needs to be done ?" type="text" onKeyDown={handleKeydown} onChange={onChange} value={inputValue} data-testid="input-keydown"/>
        </div>
    )
}
