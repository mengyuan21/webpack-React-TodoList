import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoItems from "./TodoItems"
import Todo from './Todo/Todo';

test("render todos", () => {
    const mockTodoItems = [
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

    render(<TodoItems  displayTodos={mockTodoItems}/>)
    expect(screen.getAllByText("sleep")).toBeInTheDocument();
})