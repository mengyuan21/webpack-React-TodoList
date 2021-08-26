import {
  ADD_TODOS,
  DELETE_TODOS,
  EDIT_TODO,
  TOGGLE_TODOS,
  CHANGE_ALL_COMPLETE,
  CLEAR_COMPLETED
} from '../Actions/ActionTypes'

const initialState = [];

const todoReducer = (todos = initialState, action) =>  {
  switch (action.type) {
    case ADD_TODOS:
      return [...todos, newTodos(action.payload.name)];

    case EDIT_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.name };
        }
        return todo
      })

    case DELETE_TODOS:
      return todos.filter(todo => todo.id !== action.payload.id)
    
    case TOGGLE_TODOS:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo
      })

      case CHANGE_ALL_COMPLETE:
        return todos.map(todo => ({
          ...todo,
          complete: action.payload.isChecked
        }))  

      case CLEAR_COMPLETED:
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

export default todoReducer;