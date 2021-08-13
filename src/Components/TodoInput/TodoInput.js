import React from 'react';
import "./TodoInput.css";

export default function TodoInput({todoNameRef, handleSubmit, allToComplete}) {

    function handle(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        allToComplete(value)
    }

    return (
        <div className="todo-input">
            <input type="checkbox" onChange={handle} />
            {/* <button onClick={allToComplete} className="input-button">﹀</button> */}
            <input className="new-todo" placeholder="What needs to be done ?" ref={todoNameRef} type="text" onKeyDown={handleSubmit}/>
        </div>
    )
}
