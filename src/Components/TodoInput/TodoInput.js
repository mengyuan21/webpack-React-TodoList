import React from 'react';
import "./TodoInput.css";

export default function TodoInput({ todos,todoNameRef, handleSubmit, allToComplete}) {


    function handleAllToComplete(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        allToComplete(value)
    }

    const ischecked = () => {
        if( todos.filter( todo => !todo.complete).length === 0 && todos.length !== 0)
           {return 'checked'} 
        else return'unchecked'
    }

    return (
        <div className="todo-input">
            <input type="checkbox" className="all-complete-checkbox" onChange={handleAllToComplete} />
            {/* <button onClick={allToComplete} className="input-button">﹀</button> */}
            <input className="new-todo" placeholder="What needs to be done ?" ref={todoNameRef} type="text" onKeyDown={handleSubmit}/>
        </div>
    )
}
