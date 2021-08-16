import './App.css';
import React, {useState, useRef, useEffect} from 'react';
import Header from './Components/Header/Header';
import TodoItems from './Components/TodoItems/TodoItems';
import Footer from './Components/Footer/Footer';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoFilter from './Components/TodoFilter/TodoFilter';

const TODOS_LOCAL_STORAGE_KEY= "todoList.todos";

function App() {

  const [todos, setTodos] = useState([]);
  const [displayTodos, setDisplayTodos] = useState(todos)

  //get: 只get一次，因此dependency为：[]，因为[]永远不变
  useEffect(()=> {
    // const storedTodos = JSON.parse(localStorage.getItem(TODOS_LOCAL_STORAGE_KEY))
    const storedTodos = JSON.parse(localStorage.getItem(TODOS_LOCAL_STORAGE_KEY))
    setTodos(storedTodos)
    setDisplayTodos(storedTodos) 
  }, [])

  //local.storage: todos
  //set: 每次更新都需要set一次，因此dependency为：[todos]
  useEffect(()=> {
   //  localStorage.setItem(TODOS_LOCAL_STORAGE_KEY ,JSON.stringify(todos))
    localStorage.setItem(TODOS_LOCAL_STORAGE_KEY ,JSON.stringify(todos))
    setDisplayTodos(todos)
   }, 
   [todos])


  //添加todo
  function handleSubmit (name) {
    if(name === '') return
    const id = Date.now()
    setTodos(prevTodos => {
      return [...prevTodos, {id:id, name: name, complete:false}]
    })
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const deltededList = newTodos.filter( todo => todo.id !== id)
    setTodos(deltededList);
  }

  //标记todo完成
  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todoitem = newTodos.find(todo => todo.id === id)
    todoitem.complete = !todoitem.complete
    setTodos(newTodos)
    setDisplayTodos(newTodos)
  }

  //清除已完成
  const handleClearCompleted =() => {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
    setDisplayTodos(newTodos)
  }

  //全部标记已完成/未完成
  const allToComplete = (isChecked) => {
      if(isChecked) {
        const newTodos = todos.map((todo)=> {
            todo.complete = true;
            return todo;
        }) 
        setTodos(newTodos)
        setDisplayTodos(newTodos)
      } else{
        const newTodos = todos.map((todo) => {
            todo.complete = false;
            return todo;
        })
        setTodos(newTodos)
        setDisplayTodos(newTodos)
      }
  }

  const getAllTodos =() => {
    const newTodos = [...todos]
    setDisplayTodos(newTodos)
  }

  const getActiveTodos=() => {
    const newTodos = todos.filter(todo => !todo.complete);
    setDisplayTodos(newTodos)
  }

  const getCompletedTodos = () => {
    const newTodos = todos.filter(todo => todo.complete)
    setDisplayTodos(newTodos)
  }



  return (
    <div className="App">
      <Header />
      <TodoInput 
      todos={todos}
      handleSubmit={handleSubmit}
      allToComplete={allToComplete}
      />
      <TodoItems 
      displayTodos={displayTodos} 
      toggleTodo={toggleTodo} 
      deleteTodo={deleteTodo} 
      />
      <TodoFilter 
      todos={todos}
      getAllTodos={getAllTodos}
      getActiveTodos={getActiveTodos}
      getCompletedTodos={getCompletedTodos}
      handleClearCompleted={handleClearCompleted}
      />
      <Footer />
    </div>
  );
}

export default App;
