import './App.css';
import React, { useState, useRef, useEffect } from 'react';
import Header from './Components/Header/Header';
import TodoItems from './Components/TodoItems/TodoItems';
import Footer from './Components/Footer/Footer';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoFilter from './Components/TodoFilter/TodoFilter';
import { useSelector, useDispatch } from 'react-redux';
import { CHANGE_ALL_COMPLETE, CLEAR_COMPLETED, DELETE_TODOS, EDIT_TODO } from './Actions/ActionTypes';

const selectTodos = todos => todos

const TODOS_LOCAL_STORAGE_KEY = "todoList.todos";

function App() {

  // const [todos, setTodos] = useState([]); 
  const todos = useSelector(selectTodos);
  // console.log(todos)
  const [displayTodos, setDisplayTodos] = useState(todos)
  const dispatch = useDispatch();

  //get: 只get一次，因此dependency为：[]，因为[]永远不变
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(TODOS_LOCAL_STORAGE_KEY))
    // console.log(storedTodos)
    // setTodos(storedTodos)
    setDisplayTodos(storedTodos)
  }, [])

  //local.storage: todos
  //set: 每次更新都需要set一次，因此dependency为：[todos]
  useEffect(() => {
    //  localStorage.setItem(TODOS_LOCAL_STORAGE_KEY ,JSON.stringify(todos))
    localStorage.setItem(TODOS_LOCAL_STORAGE_KEY, JSON.stringify(todos))
    setDisplayTodos(todos)
    console.log(todos)
  },[todos])

  //清除已完成
  const handleClearCompleted = () => {
    dispatch({
      type:CLEAR_COMPLETED
    })
    setDisplayTodos(newTodos)
  }

  //全部标记已完成/未完成
  const allToComplete = (isChecked) => {
    dispatch({
      type:CHANGE_ALL_COMPLETE,
      payload:{
        isChecked
      }
    })
  }

  const getAllTodos = () => {
    const newTodos = [...todos]
    setDisplayTodos(newTodos)
  }

  const getActiveTodos = () => {
    const newTodos = todos.filter(todo => !todo.complete);
    setDisplayTodos(newTodos)
  }

  const getCompletedTodos = () => {
    const newTodos = todos.filter(todo => todo.complete)
    setDisplayTodos(newTodos)
  }


  return (
    <div className="App">
      {/* <ErrorBoundary> */}
        <Header />
        <TodoInput
          allToComplete={allToComplete}
        />
        <TodoItems
          displayTodos={displayTodos}
        />
        <TodoFilter
          getAllTodos={getAllTodos}
          getActiveTodos={getActiveTodos}
          getCompletedTodos={getCompletedTodos}
          handleClearCompleted={handleClearCompleted}
        />
        <Footer />
      {/* </ErrorBoundary> */}

    </div>
  );
}

export default App;
