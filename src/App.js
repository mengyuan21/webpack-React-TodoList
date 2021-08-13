import './App.css';
import React, {useState, useRef} from 'react';
import Header from './Components/Header/Header';
import TodoItems from './Components/TodoItems/TodoItems';
import Footer from './Components/Footer/Footer';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoFilter from './Components/TodoFilter/TodoFilter';


function App() {

  const [todos, setTodos] = useState([]);
  const [displayTodos, setDisplayTodos] = useState(todos)
  const todoNameRef = useRef();

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
    console.log(todos)
    console.log(newTodos)
    const todoitem = todos.find(todo => todo.id === id)
    console.log(todoitem)
    todoitem.complete = !todoitem.complete
    setTodos(newTodos)
    setDisplayTodos(newTodos)
  }

  //清除已完成
  function handleClearCompleted() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
    setDisplayTodos(newTodos)
  }

  //allToComplete
  function allToComplete(isChecked) { 
      console.log(isChecked)
      if(isChecked) {
        const newTodos = todos.map(function(todo) {
            todo.complete = true;
            return todo;
        }) 
        console.log(newTodos)
        setTodos(newTodos)
        setDisplayTodos(newTodos)
      } else{
        const newTodos = todos.map(function(todo) {
            todo.complete = false;
            return todo;
        })
        console.log(newTodos)
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

  function getCompletedTodos() {
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
