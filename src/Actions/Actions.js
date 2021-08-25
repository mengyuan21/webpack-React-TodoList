import * as ACTIONS from './ActionTypes'

export const addTodo = name => ({
    type:ACTIONS.ADD_TODOS,
    payload:{
        name
    }   
})

export const deleteTodo = id => ({
    type: ACTIONS.DELETE_TODOS,
    payload:{
        id
    }
})

export const editTodo = (id, text) => ({
    type:ACTIONS.EDIT_TODO,
    payload:{
        id,
        text
    }
})

export const toggleTodo = (id) => ({
    type: ACTIONS.TOGGLE_TODOS,
    payload:{
        id
    }
})

export const allToComplete = () => ({
    type: ACTIONS.CHANGE_ALL_COMPLETE,
})

export const  clearCompleted = () => ({
    type: ACTIONS.CLEAR_COMPLETED,
})