import {
  ADD_TODOS,
  DELETE_TODOS,
  EDIT_TODO,
  TOGGLE_TODOS,
  ALL_TO_COMPLETE,
  CLEAR_COMPLETED
} from '../Actions/ActionTypes'


const initialState = [{
  id:1,
  name:"learn redux",
  complete:true
}];

const reducer = (todos = initialState, action) =>  {
  console.log(todos)
  switch (action.type) {
    case ADD_TODOS:
      return [...todos, newTodos(action.name)];

    case EDIT_TODO:
      return todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, name: action.name };
        }
        return todo
      })

    case DELETE_TODOS:
      return todos.filter(todo => todo.id !== action.id)
    
    case TOGGLE_TODOS:
      return todos.map(todo => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo
      })

    case ALL_TO_COMPLETE:
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

export default reducer;