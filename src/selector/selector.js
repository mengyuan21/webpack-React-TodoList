import * as ACTIONS from '../Actions/TodoFilters'

const getTodosByType = (todoType) => {
    switch(todoType){
      case "all" :
        return todos;
      case "active":
        return activeTodos;
      case "complete":
        return completedTodos;    
    }
  }

export default getTodosByType  