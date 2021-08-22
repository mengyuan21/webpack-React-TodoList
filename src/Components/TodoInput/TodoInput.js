import React, {useContext, useState} from 'react';
import "./TodoInput.css";
import { ACTIONS } from "../../actions/actions";
import { TodosContext } from "../../Context/context";

export default function TodoInput() {

    const { dispatch } = useContext(TodosContext)
    const [inputValue, setInputValue] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        if (inputValue === "") return
        dispatch({
            type: ACTIONS.ADD_TODO,
            payload: {
                name: inputValue
            }
        })
        setInputValue("")
    }
     const handleAllToComplete =(e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        dispatch({
            type: ACTIONS.ALL_TO_COMPLETE,
            payload: {
                isChecked: value
            }
        })
    }

    return (
        <div className="todo-input">
            <input type="checkbox" className="all-complete-checkbox" onChange={handleAllToComplete} data-testid="checkbox-test" />
            <form onSubmit={handleSubmit}>
                <input
                    className="new-todo"
                    placeholder="What needs to be done ?" 
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
             </form>
        </div>
    )
}
