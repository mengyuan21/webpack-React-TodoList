import * as actions from '../Actions/ActionTypes.js'

const initialState = [];

const reducer = (todos = initialState, action) =>  {
  switch (action.type) {
    case actions.ADD_TODOS:
      return [...todos, newTodos(action.payload.name)];

    case actions.EDIT_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.name };
        }
        return todo
      })

    case actions.DELETE_TODOS:
      return todos.filter(todo => todo.id !== action.payload.id)
    
    case actions.TOGGLE_TODOS:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo
      })

    case actions.ALL_TO_COMPLETE:
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