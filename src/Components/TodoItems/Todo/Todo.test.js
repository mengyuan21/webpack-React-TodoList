import React from "react";
import { render, screen , fireEvent} from "@testing-library/react";
import Todo from "./Todo";
import userEvent from '@testing-library/user-event';
import "@testing-library/jest-dom";

const mockTodo = {
    id:1,
    name:'Learn Jest',
    complete:false,
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

test("should ture complete to trun when click checkbox", () => {
    render(<Todo todo={mockTodo} toggleTodo={mocktoggleTodo} deleteTodo={mockDeleteTodo}/>)
    fireEvent.click(screen.getByRole("checkbox"))
    expect(mocktoggleTodo).toHaveBeenCalledTimes(1)
})

test("handle delete button clicked", () => {
    render(<Todo todo={mockTodo} toggleTodo={mocktoggleTodo} deleteTodo={mockDeleteTodo}/>)
    fireEvent.click(screen.getByRole("button"))
    expect(mockDeleteTodo).toHaveBeenCalledTimes(1)
})

test('should render todo.name on list', () => {
    render(<Todo todo={mockTodo} toggleTodo={mocktoggleTodo} deleteTodo={mockDeleteTodo}/>)
    expect(screen.getByText('Learn Jest')).toBeInTheDocument()
})
