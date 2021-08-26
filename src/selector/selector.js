import * as ACTIONS from '../Actions/TodoFilters'
import { createSelector } from 'reselect'

const getTodosByType = createSelector(() => {
    switch(actions.type){
      case ACTIONS.SHOW_ALL:
        return todos;
      case ACTIONS.SHOW_ACTIVE:
        return todos => todos.filter(todo => !todo.complete);
      case ACTIONS.SHOW_COMPLETED:
        return todos => todos.filter(todo => todo.complete);    
      default:
          throw new Error('Something wrong with filter')  
    }
  }) 

export default getTodosByType  