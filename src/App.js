import './App.css';
import React, { useState} from 'react';
import getTodosByType from './selector/selector';
import Header from './Components/Header/Header';
import TodoItems from './Components/TodoItems/TodoItems';
import Footer from './Components/Footer/Footer';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoFilter from './Components/TodoFilter/TodoFilter';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_ALL_COMPLETE, CLEAR_COMPLETED } from './Actions/ActionTypes';

const selectTodos = todos => todos
const getCompletedTodosA = todos => todos.filter(todo => todo.complete)
const getActiveTodosA = todos => todos.filter(todo => !todo.complete)

function App() {

  const filterTodos = useSelector(getTodosByType)

  const completedTodos = useSelector(getCompletedTodosA)
  const activeTodos = useSelector(getActiveTodosA)
  const todos = useSelector(selectTodos);
  const [todoType, setTodoType] = useState('all')
  const dispatch = useDispatch();

  const handleClearCompleted = () => {
    dispatch({
      type:CLEAR_COMPLETED
    })
  }

  const allToComplete = (isChecked) => {
    dispatch({
      type:CHANGE_ALL_COMPLETE,
      payload:{
        isChecked
      }
    })
  }

  const getTodosType = (todoType) => {
    switch(todoType){
      case "all" :
        return todos;
      case "active":
        return activeTodos;
      case "complete":
        return completedTodos;    
    }
  }

  const handler = (todoTypeToBeDisplayed) => {
    setTodoType(todoTypeToBeDisplayed)
  }
 
  return (
    <div className="App">
        <Header />
        <TodoInput
          allToComplete={allToComplete}
        />
        <TodoItems
          displayTodos={filterTodos}
        />
        <TodoFilter
          handler={handler}
          handleClearCompleted={handleClearCompleted}
        />
        <Footer />
    </div>
  );
}

export default App;
