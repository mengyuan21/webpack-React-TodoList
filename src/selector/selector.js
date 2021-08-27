import * as TODOFILTERTYPE from '../Actions/TodoFilters'
import { createSelector } from 'reselect'


const getActiveTodos = (todos) => todos.filter(todo => !todo.complete)
const getCompleteTodos = (todos) => todos.filter(todo => todo.complete)
const getVisibilityFilter = state => state.visibilityFilter
const getTodos = state => state.todoReducer
export const getActiveNum = createSelector(
  getTodos,
  (allTodos) => getActiveTodos(allTodos).length
)

const getTodosByType = createSelector(
    getVisibilityFilter,
    getTodos,
    (visibilityFilter, todos) => {
    switch(visibilityFilter){
      case TODOFILTERTYPE.SHOW_ALL:
        return todos;
      case TODOFILTERTYPE.SHOW_ACTIVE:
        return getActiveTodos(todos);
      case TODOFILTERTYPE.SHOW_COMPLETED:
        return getCompleteTodos(todos);    
      default:
          throw new Error('Something wrong with filter')  
    }
  }) 

export default getTodosByType  