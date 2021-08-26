import * as TODOFILTERTYPE from '../Actions/TodoFilters'
import { createSelector } from 'reselect'
import visibilityFilter from '../reducer/visibilityFilter'

const getVisibilityFilter = state => state.visibilityFilter
const getTodos = state => state.todoReducer
// export const getActiveNum = state => {
//   const allTodos = getTodos(state)
//   const name = allTodos.filter(todo => !todo.complete).length
//   return name
// }

export const getActiveNum = createSelector(
  getTodos,
  (allTodos) => allTodos.filter(todo => !todo.complete).length
)

// todos.filter(todo => !todo.complete).length

const getTodosByType = createSelector(
    getVisibilityFilter,
    getTodos,
    (visibilityFilter, todos) => {
    switch(visibilityFilter){
      case TODOFILTERTYPE.SHOW_ALL:
        return todos;
      case TODOFILTERTYPE.SHOW_ACTIVE:
        console.log(todos);
        return todos.filter(todo => !todo.complete);
      case TODOFILTERTYPE.SHOW_COMPLETED:
        return todos.filter(todo => todo.complete);    
      default:
          throw new Error('Something wrong with filter')  
    }
  }) 

export default getTodosByType  