import React from "react";
import { ACTIONS } from "../actions/actions";
import { useReducer } from "react";
import { TODOS_LOCAL_STORAGE_KEY } from "../constants/constants";

export const TodosContext = React.createContext();

const reducer = (todos, action)=> {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodos(action.payload.name)];

        case ACTIONS.EDIT_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, name: action.payload.name };
                }
                return todo
            })

        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)

        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, complete: !todo.complete };
                }
                return todo
            })

        case ACTIONS.ALL_TO_COMPLETE:
            return todos.map(todo => {
                if (action.payload.isChecked) {
                    todo.complete = true
                    return todo
                }
                else {
                    todo.complete = false;
                    return todo
                }
            })

        case ACTIONS.CLEAR_COMPLETED:
            return todos.filter(todo => !todo.complete)
        default:
            return todos
    }
}

const newTodos = (name) => {
    const id = Date.now()
    return {
        id: id,
        name,
        complete: false
    }
}


export const Provider = ({ children }) => {
    const localStorageTodos = JSON.parse(localStorage.getItem(TODOS_LOCAL_STORAGE_KEY))
    const initialState = localStorageTodos === null ? [] : localStorageTodos;
    const [todos, dispatch] = useReducer(reducer, initialState);

    return (
        <TodosContext.Provider value={{ todos, dispatch }}>{children}</TodosContext.Provider>
    );
};