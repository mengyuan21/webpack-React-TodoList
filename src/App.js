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
  const todoNameRef = useRef();


  //get: 只get一次，因此dependency为：[]，因为[]永远不变
  useEffect(()=> {
    console.log("get item")
    // const storedTodos = JSON.parse(localStorage.getItem(TODOS_LOCAL_STORAGE_KEY))
    const storedTodos = JSON.parse(localStorage.getItem(TODOS_LOCAL_STORAGE_KEY))
    setTodos(storedTodos)
    setDisplayTodos(storedTodos) 
  }, [])


  //local.storage: todos
  //set: 每次更新都需要set一次，因此dependency为：[todos]
  useEffect(()=> {
    console.log('set item')
   //  localStorage.setItem(TODOS_LOCAL_STORAGE_KEY ,JSON.stringify(todos))
    localStorage.setItem(TODOS_LOCAL_STORAGE_KEY ,JSON.stringify(todos))
   }, 
   [todos])


  //添加todo
  function handleAddTodo () {
    const name = todoNameRef.current.value;
    if(name === '') return
    const id = Date.now()
    setTodos(prevTodos => {
      return [...prevTodos, {id:id, name: name, complete:false}]
    })
    setDisplayTodos(prevTodos => {
      return [...prevTodos, {id:id, name: name, complete:false}]
    })
    todoNameRef.current.value = null;
  }

  //onKeyDown
  function handleSubmit(e) {
    if (e.keyCode===13) {
      return handleAddTodo();
    }
  }

  function deleteTodo(id) {
    const newTodos = [...todos];
    const deltededList = newTodos.filter( todo => todo.id !== id)
    setTodos(deltededList);
    setDisplayTodos(deltededList);
  }

  //标记todo完成
  function toggleTodo(id) {
    const newTodos = [...todos];
    const todoitem = newTodos.find(todo => todo.id === id)
    todoitem.complete = !todoitem.complete
    // let isAll = 0;
    // todos.map(function(todo) {
    //     if(todo.complete) isAll++
    //     return todo;
    // }) 
    // if(isAll===todos.length) {
    //     checkBox = true
    // }else {
    //     checkBox = false   
    // }
    // setCheckBox(checkBox)
    setTodos(newTodos)
    setDisplayTodos(newTodos)
  }

  //清除已完成
  function handleClearCompleted() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
    setDisplayTodos(newTodos)
  }

  //全部标记已完成/未完成
  function allToComplete(isChecked) {
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

  function getAllTodos() {
    const newTodos = [...todos]
    setDisplayTodos(newTodos)
  }

  function getActiveTodos() {
    const newTodos = todos.filter(todo => !todo.complete);
    setDisplayTodos(newTodos)
  }

  function getCompletedTodos () {
    const newTodos = todos.filter(todo => todo.complete)
    setDisplayTodos(newTodos)
  }

  function editTodoItem(id) {
    const name = todoNameRef.current.value;
    if (name === '') return
    setTodos(prevTodos => { 
      return[ ...prevTodos, {id:id, name: name, complete:false}]
    })
    setDisplayTodos(prevTodos => {
      return[ ...prevTodos, {id:id, name: name, complete:false}]
    })
  }

  return (
    <div className="App">
      <Header />
      <TodoInput 
      todos={todos}
      todoNameRef={todoNameRef} 
      handleSubmit={handleSubmit}
      allToComplete={allToComplete}
      />
      <TodoItems 
      displayTodos={displayTodos} 
      toggleTodo={toggleTodo} 
      deleteTodo={deleteTodo} 
      ref={todoNameRef}
      editTodoItem={editTodoItem}
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
