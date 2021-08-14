import React from 'react';
import styled from 'styled-components';

export default function FilterBotton({getAllTodos, getActiveTodos, getCompletedTodos}) {
    
    const Button = styled.button`
        position: relative;
        left: 10px;
        border-width: 0;
        background: transparent;
        outline-width: 0px;
        margin-right: 15px;
        margin-top:8px;
        border-color: white;
        color: rgb(161, 159, 159);
        border-radius:5px;
        background-color: white;
        &:hover {
            border-width: 1px;
        border-color: rgb(216, 144, 156);
        }
    `;

    return (
        <div className="filter-buttons" >
                <Button onClick={getAllTodos} > All </Button>
                <Button onClick={getActiveTodos} > Active </Button>
                <Button onClick={getCompletedTodos} > Completed </Button>
        </div>  
    )
}
