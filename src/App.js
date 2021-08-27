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



function App() {

  const filterTodos = useSelector(getTodosByType)

  return (
    <div className="App">
        <Header />
        <TodoInput/>
        <TodoItems
          displayTodos={filterTodos}
        />
        <TodoFilter/>
        <Footer />
    </div>
  );
}

export default App;
