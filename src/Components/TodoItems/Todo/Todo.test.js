import React from "react";
import { render, screen } from "@testing-library/react";
import Todo from "./Todo";
import "@testing-library/jest-dom";

const mockTodo = {
    id:1,
    name:'Learn Jest',
    complete:true,
}

const mocktoggleTodo = jest.fn(todo => todo.complete === !todo.complete )
const mockDeleteTodo = jest.fn( todo => {return todo.id} )
const div = document.createElement('div');


test("render checkbox", () => {
    render(<Todo todo={mockTodo} toggleTodo={mocktoggleTodo} deleteTodo={mockDeleteTodo} /> , div)
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
})

test("render todo name", () => {
    render(<Todo  todo={mockTodo} toggleTodo={mocktoggleTodo} deleteTodo={mockDeleteTodo}/>, div)
    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
}) 

test("render delete button", () => {
    render(<Todo todo={mockTodo} toggleTodo={mocktoggleTodo} deleteTodo={mockDeleteTodo}/>, div);
    expect(screen.getByRole('button')).toBeInTheDocument(); 
})