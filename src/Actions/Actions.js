import * as actions from './ActionTypes'

export const addTodo = (name) => ({
    type:ACTIONS.ADD_TODOS,
    payload:{
        name
    }   
})