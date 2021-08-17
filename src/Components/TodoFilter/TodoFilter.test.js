import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "./TodoFilter";
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

const mockGetAllTodos = jest.fn([...mockTodos])
const mockGetActiveTodos = jest.fn(mockTodos.filter(todo => !todo.complete))
const mockGetCompletedTodos = jest.fn(mockTodos.filter(todo => todo.complete))
const mockHandleClearCompleted = jest.fn(todo => {return todo.id})
const div = document.createElement('div');

test("number of left to do", () => {
    render(<TodoFilter todos={mockTodos} 
        getAllTodos={mockGetAllTodos} 
        getActiveTodos={mockGetActiveTodos} 
        getCompletedTodos={mockGetCompletedTodos} 
        handleClearCompleted={mockHandleClearCompleted}/>, div)
    
    expect(screen.getByTestId('number-to-do')).toHaveTextContent('2 left to do');
})

test('to have filter button component', () =>{
    render(<TodoFilter todos={mockTodos} 
        getAllTodos={mockGetAllTodos} 
        getActiveTodos={mockGetActiveTodos} 
        getCompletedTodos={mockGetCompletedTodos} 
        handleClearCompleted={mockHandleClearCompleted}/>, div)

    expect(screen.getByText('All')).toBeInTheDocument();    
    expect(screen.getByText('Active')).toBeInTheDocument();    
    expect(screen.getByText('Completed')).toBeInTheDocument();    
})

test('to have clear completed button', () => {
    render(<TodoFilter todos={mockTodos} 
        getAllTodos={mockGetAllTodos} 
        getActiveTodos={mockGetActiveTodos} 
        getCompletedTodos={mockGetCompletedTodos} 
        handleClearCompleted={mockHandleClearCompleted}/>, div)

    expect(screen.getByTestId("clear-completed")).toHaveTextContent('Clear Completed')  
})