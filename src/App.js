import './App.css';
import React, { useState, useEffect, useReducer, useContext, createContext } from 'react';
import Header from './Components/Header/Header';
import TodoItems from './Components/TodoItems/TodoItems';
import Footer from './Components/Footer/Footer';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoFilter from './Components/TodoFilter/TodoFilter';
import { ACTIONS } from './constants/actions';

const TODOS_LOCAL_STORAGE_KEY = "todoList.todos";
const initialState = JSON.parse(localStorage.getItem(TODOS_LOCAL_STORAGE_KEY))
export const TodosContext = React.createContext();
export const DisplayTodosContext = React.createContext();


function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodos(action.payload.name)];
    case ACTIONS.EDIT_TODO:
      return todos.map(todo => {
        if (todo.id = action.payload.id) {
          return todo.name = action.payload.name
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo
      })
    case ACTIONS.ALL_TO_COMPLETE:
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
    case ACTIONS.CLEAR_COMPLETED:
      return todos.filter(todo => !todo.complete)
    default:
      return todos
  }
}

function newTodos(name) {
  const id = Date.now()
  return {
    id: id,
    name,
    complete: false
  }
}


function App() {
  const [todos, dispatch] = useReducer(reducer, initialState)
  const [displayTodos, setDisplayTodos] = useState(todos)
  const [name, setName] = useState("")

  useEffect(() => {
    localStorage.setItem(TODOS_LOCAL_STORAGE_KEY, JSON.stringify(todos))
    setDisplayTodos(todos)
  },
    [todos])

  //添加todo
  function handleSubmit(e) {
    e.preventDefault();
    if (name === "") return
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: {
        name
      }
    })
    setName("")
  }
  //编辑todo
  function handleEdit(name, id) {
    console.log(id)
    dispatch({
      type: ACTIONS.EDIT_TODO,
      payload: {
        name,
        id
      }
    })
  }

  //删除todo
  const deleteTodo = (id) => {
    dispatch({
      type: ACTIONS.DELETE_TODO,
      payload: {
        id: id
      }
    })
  }

  //标记todo完成
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todoitem = newTodos.find(todo => todo.id === id)
    todoitem.complete = !todoitem.complete
    setDisplayTodos(newTodos)
  }

  //全部标记已完成/未完成
  const allToComplete = (isChecked) => {
    dispatch({
      type: ACTIONS.ALL_TO_COMPLETE,
      payload: {
        isChecked
      }
    })
  }

  //清除已完成
  const handleClearCompleted = () => {
    dispatch({
      type: ACTIONS.CLEAR_COMPLETED
    })
    setDisplayTodos(todos)
  }

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
    // <TodoContext.Provider>
      <div className="App">
        {/* <ErrorBoundary> */}
        <Header />
        <TodoInput
          name={name}
          setName={setName}
          dispatch={dispatch}
          handleSubmit={handleSubmit}
          allToComplete={allToComplete}
        />
        <TodoItems
          todos={todos}
          displayTodos={displayTodos}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          dispatch={dispatch}
          handleEdit={handleEdit}
        />
        <TodoFilter
          todos={todos}
          dispatch={dispatch}
          getAllTodos={getAllTodos}
          getActiveTodos={getActiveTodos}
          getCompletedTodos={getCompletedTodos}
          handleClearCompleted={handleClearCompleted}
        />
        <Footer />
        {/* </ErrorBoundary> */}

      </div>
    // </TodoContext.Provider>

  );
}

export default App;
