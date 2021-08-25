import './App.css';
import React, { useState, useEffect } from 'react';
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

const TODOS_LOCAL_STORAGE_KEY = "todoList.todos";

function App() {

  const completedTodos = useSelector(getCompletedTodosA)
  const activeTodos = useSelector(getActiveTodosA)
  const todos = useSelector(selectTodos);
  const [todoType, setTodoType] = useState('all')
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const storedTodos = JSON.parse(localStorage.getItem(TODOS_LOCAL_STORAGE_KEY))
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem(TODOS_LOCAL_STORAGE_KEY, JSON.stringify(todos))
  // },[todos])

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
    console.log("dsadsadasddsad");
    console.log(todoTypeToBeDisplayed);
    setTodoType(todoTypeToBeDisplayed)
  }
 

  return (
    <div className="App">
        <Header />
        <TodoInput
          allToComplete={allToComplete}
        />
        <TodoItems
          displayTodos={getTodosType(todoType)}
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
