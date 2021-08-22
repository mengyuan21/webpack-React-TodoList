import './App.css';
import React, { useState, useEffect, useContext } from 'react';
import Header from './Components/Header/Header';
import TodoItems from './Components/TodoItems/TodoItems';
import Footer from './Components/Footer/Footer';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoFilter from './Components/TodoFilter/TodoFilter';
import { TodosContext } from "./Context/context";
import { TODOS_LOCAL_STORAGE_KEY} from "./constants/constants";
import {ACTIONS} from "./actions/actions";
import {getTodos} from "./fetchData/apiUtils";

function App() {
  const { todos, dispatch } = useContext(TodosContext);
  const [displayTodos, setDisplayTodos] = useState([]);

  useEffect(() => {
      getTodos().then(data => {
          dispatch({
              type: ACTIONS.SET_TODO,
              payload: {todos: data}
          })
      })
  },[])

  useEffect(() => {
      localStorage.setItem(TODOS_LOCAL_STORAGE_KEY, JSON.stringify(todos));
      setDisplayTodos(todos);
  }, [todos])

  //筛选
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
    <div>
        <Header />
        <TodoInput />

        <TodoItems displayTodos={displayTodos}/>

        <TodoFilter
          getAllTodos={getAllTodos}
          getActiveTodos={getActiveTodos}
          getCompletedTodos={getCompletedTodos}
        />
        <Footer />
    </div>
  );
}

export default App;
