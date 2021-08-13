import React from 'react';
import "./TodoInput.css";

export default function TodoInput({todoNameRef, handleSubmit}) {


    return (
        <div className="todo-input">
            <button className="input-button">﹀</button>
            <input className="new-todo" placeholder="What needs to be done ?" ref={todoNameRef} type="text" onKeyDown={handleSubmit}/>
        </div>
    )
}
