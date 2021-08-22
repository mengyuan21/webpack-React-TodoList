import React, {useContext, useState} from 'react';
import "./TodoInput.css";
import { ACTIONS } from "../../actions/actions";
import { TodosContext } from "../../Context/context";
import {addTodos, updateAllTodos} from "../../fetchData/apiUtils";

export default function TodoInput() {

    const { todos, dispatch } = useContext(TodosContext)
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue === "") return
        const newTodo = getNewTodos(inputValue)
        addTodos(newTodo).then(todo => {
            dispatch({
                type: ACTIONS.ADD_TODO,
                payload: {
                    todo
                }
            })
        })

        setInputValue("")
    }

    const handleAllToComplete =(e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        updateAllTodos(todos, value).then(() => {
            dispatch({
                type: ACTIONS.ALL_TO_COMPLETE,
                payload: {
                    isChecked: value
                }
            })
        })
    }

    const getNewTodos = (name) => {
        const id = Date.now()
        return {
            id: id,
            name,
            complete: false
        }
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
