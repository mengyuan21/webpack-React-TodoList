import React, { useContext } from 'react';
import "./TodoFilter.css";
import styled from 'styled-components';
import { TodosContext } from "../../Context/context";
import { ACTIONS } from "../../actions/actions";
import {deleteAllTodos} from "../../fetchData/apiUtils";


const Button = styled.button`
    position: relative;
    left: 10px;
    border-width: 0;
    background: transparent;
    outline-width: 0px;
    margin-right: 15px;
    margin-top:8px;
    color: rgb(161, 159, 159);
    border-radius:5px;
    background-color: white;
    &:hover{
        border-width: 1px;
        border-color: rgb(216, 144, 156); 
    }
`;

export default function TodoFilter({ getAllTodos, getActiveTodos, getCompletedTodos }) {

    const { todos, dispatch } = useContext(TodosContext);
    //清除已完成
    const handleClearCompleted = () => {
        const completedTodos = todos.filter(todo => todo.complete)
        deleteAllTodos(completedTodos).then((todoIds) => {
            dispatch({
                type: ACTIONS.CLEAR_COMPLETED
            })
        })
    }
    return (
        <div className="todo-filter" >
            <div className="numbers-left-todo" >
                <p data-testid="number-to-do">{todos.filter(todo => !todo.complete).length} left to do</p>
            </div>

            <Button data-testid="filter-button" onClick={getAllTodos} > All </Button>
            <Button onClick={getActiveTodos} > Active </Button>
            <Button onClick={getCompletedTodos} > Completed </Button>

            <button className="clear-completed" data-testid="clear-completed" onClick={handleClearCompleted} > Clear Completed </button>
        </div>
    )
}
