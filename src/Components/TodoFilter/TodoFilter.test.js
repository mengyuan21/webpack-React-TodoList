import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import "./TodoFilter";
import userEvent from '@testing-library/user-event'
import TodoFilter from "./TodoFilter";


const mockTodos = [
    {
        id:1,
        name:'learn jest',
        complete:false,
    },
    {
        id:2,
        name:'sleep',
        complete:false,
    },
    {
        id:3,
        name:'learn React',
        complete:true,
    }
]

const mockGetAllTodos = jest.fn()
const mockGetActiveTodos = jest.fn()
const mockGetCompletedTodos = jest.fn()
const mockHandleClearCompleted = jest.fn()

test("number of left to do", () => {
    render(<TodoFilter todos={mockTodos} 
        getAllTodos={mockGetAllTodos} 
        getActiveTodos={mockGetActiveTodos} 
        getCompletedTodos={mockGetCompletedTodos} 
        handleClearCompleted={mockHandleClearCompleted}/>)
    
    expect(screen.getByTestId('number-to-do')).toHaveTextContent('2 left to do');
})

test('to have filter button component', () =>{
    render(<TodoFilter todos={mockTodos} 
        getAllTodos={mockGetAllTodos} 
        getActiveTodos={mockGetActiveTodos} 
        getCompletedTodos={mockGetCompletedTodos} 
        handleClearCompleted={mockHandleClearCompleted}/>)

    expect(screen.getByText('All')).toBeInTheDocument();    
    expect(screen.getByText('Active')).toBeInTheDocument();    
    expect(screen.getByText('Completed')).toBeInTheDocument();    
})

test('to have clear completed button', () => {
    render(<TodoFilter todos={mockTodos} 
        getAllTodos={mockGetAllTodos} 
        getActiveTodos={mockGetActiveTodos} 
        getCompletedTodos={mockGetCompletedTodos} 
        handleClearCompleted={mockHandleClearCompleted}/>)

    expect(screen.getByTestId("clear-completed")).toHaveTextContent('Clear Completed')  
})

test('should get style from buttom', () => {
    render(<TodoFilter todos={mockTodos} 
        getAllTodos={mockGetAllTodos} 
        getActiveTodos={mockGetActiveTodos} 
        getCompletedTodos={mockGetCompletedTodos} 
        handleClearCompleted={mockHandleClearCompleted}/>)
    expect(screen.getByTestId("filter-button")).toHaveStyle(
            ` background-color: white;`
    )
})     

test('should get hover style of button', () => {
    render(<TodoFilter todos={mockTodos} 
        getAllTodos={mockGetAllTodos} 
        getActiveTodos={mockGetActiveTodos} 
        getCompletedTodos={mockGetCompletedTodos} 
        handleClearCompleted={mockHandleClearCompleted}/>)
    userEvent.hover(screen.getByText("All"))
    waitFor(() => {
        expect(screen.getByText("All")).toHaveStyle(
            `left: 10px;`
        )
    }) 
})  