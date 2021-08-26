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
          handleClearCompleted={handleClearCompleted}
        />
        <Footer />
    </div>
  );
}

export default App;
