import {
  ADD_TODOS,
  DELETE_TODOS,
  EDIT_TODO,
  TOGGLE_TODOS,
  ALL_TO_COMPLETE,
  CLEAR_COMPLETED
} from '../Actions/ActionTypes'


const initialState = [];

const reducer = (todos = initialState, action) =>  {
  switch (action.type) {
    case actions.ADD_TODOS:
      return [...todos, newTodos(action.name)];

    case actions.EDIT_TODO:
      return todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, name: action.name };
        }
        return todo
      })

    case actions.DELETE_TODOS:
      return todos.filter(todo => todo.id !== action.id)
    
    case actions.TOGGLE_TODOS:
      return todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo
      })

    case actions.ALL_TO_COMPLETE:
      return todos.map(todo => {
        if (action.isChecked) {
          todo.complete = true
          return todo
        }
        else {
          todo.complete = false;
          return todo
        }
      })

    case actions.CLEAR_COMPLETED:
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


export default reducer;