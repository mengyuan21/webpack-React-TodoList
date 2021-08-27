import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import TodoItems from './Components/TodoItems/TodoItems';
import Footer from './Components/Footer/Footer';
import TodoInput from './Components/TodoInput/TodoInput';
import TodoFilter from './Components/TodoFilter/TodoFilter';


function App() {

  return (
    <div className="App">
        <Header />
        <TodoInput/>
        <TodoItems/>
        <TodoFilter/>
        <Footer />
    </div>
  );
}

export default App;
