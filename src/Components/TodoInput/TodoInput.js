import React, {useState} from 'react';
import "./TodoInput.css";

export default function TodoInput({ todos,todoNameRef, handleSubmit, allToComplete}) {

    const [inputValue, setInputValue] = useState('');

     const handleAllToComplete =(e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        allToComplete(value)
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
            <input type="checkbox" className="all-complete-checkbox" onChange={handleAllToComplete} />
            {/* <button onClick={allToComplete} className="input-button">﹀</button> */}
            <input className="new-todo" placeholder="What needs to be done ?" type="text" onKeyDown={handleKeydown} onChange={onChange} value={inputValue}/>
        </div>
    )
}
