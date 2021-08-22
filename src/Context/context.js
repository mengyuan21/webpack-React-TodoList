import React from "react";
import { ACTIONS } from "../actions/actions";
import { useReducer } from "react";
import { TODOS_LOCAL_STORAGE_KEY } from "../constants/constants";

export const TodosContext = React.createContext();

const reducer = (todos, action)=> {
    switch (action.type) {
        case ACTIONS.SET_TODO:
            return action.payload.todos

        case ACTIONS.ADD_TODO:
            return [...todos, action.payload.todo];

        case ACTIONS.EDIT_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.todo.id) {
                    return action.payload.todo;
                }
                return todo
            })

        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)

        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.todo.id) {
                    return action.payload.todo;
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


export const Provider = ({ children }) => {
    const localStorageTodos = JSON.parse(localStorage.getItem(TODOS_LOCAL_STORAGE_KEY))
    const initialState = localStorageTodos === null ? [] : localStorageTodos;
    const [todos, dispatch] = useReducer(reducer, initialState);

    return (
        <TodosContext.Provider value={{ todos, dispatch }}>{children}</TodosContext.Provider>
    );
};