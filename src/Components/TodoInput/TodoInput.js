import React  from 'react';
import "./TodoInput.css";

export default function TodoInput({ name,setName,handleSubmit, allToComplete}) {

     const handleAllToComplete =(e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        allToComplete(value)
    }

    return (
        <div className="todo-input">
            <input type="checkbox" className="all-complete-checkbox" onChange={handleAllToComplete} data-testid="checkbox-test" />
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
        </div>
    )
}
