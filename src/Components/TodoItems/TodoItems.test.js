import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoItems from "./TodoItems"

const mockDisplayTodos = [
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


const mocktoggleTodo = jest.fn(todo => todo.complete === !todo.complete )
const mockDeleteTodo = jest.fn( todo => {return todo.id})
const div = document.createElement('div');


test("render all todos", () => {
    render(<TodoItems displayTodos={mockDisplayTodos} toggleTodo={mocktoggleTodo} deleteTodo={mockDeleteTodo} />, div)
    expect(screen.getByText('learn jest')).toBeInTheDocument();
    expect(screen.getByText('sleep')).toBeInTheDocument();
    expect(screen.getByText('learn React')).toBeInTheDocument();
})