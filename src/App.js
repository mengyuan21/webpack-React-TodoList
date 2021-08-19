import './App.css';
import React, { useState, useEffect, useReducer, createContext } from 'react';
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
        if (todo.id === action.payload.id) {
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

export const AppContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState)
  const [displayTodos, setDisplayTodos] = useState(todos)
  const [name, setName] = useState("")

  //local.storage: todos
  //set: 每次更新都需要set一次，因此dependency为：[todos]
  useEffect(() => {
    //  localStorage.setItem(TODOS_LOCAL_STORAGE_KEY ,JSON.stringify(todos))
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

  function handleEdit(name, id) {
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
    <div className="App">
      <TodosContext.Provider value={todos} >
        <Header />
        <TodoInput
          name={name}
          setName={setName}
          dispatch={dispatch}
          handleSubmit={handleSubmit}
          allToComplete={allToComplete}
        />

          <TodoItems
            displayTodos={displayTodos}
            dispatch={dispatch}
            displayTodos={displayTodos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            handleEdit={handleEdit}
          />

        <TodoFilter
          dispatch={dispatch}
          getAllTodos={getAllTodos}
          getActiveTodos={getActiveTodos}
          getCompletedTodos={getCompletedTodos}
          handleClearCompleted={handleClearCompleted}
        />
        <Footer />
      </TodosContext.Provider>


    </div>
  );
}

export default App;
