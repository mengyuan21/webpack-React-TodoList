import React from "react";
import { render, screen } from "@testing-library/react";
import TodoItems from "./TodoItems"
import "@testing-library/jest-dom";

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

    render(<TodoItems todos={mockTodoItems}/>)
    expect(screen.getByRole('listitem').length).toBe(3);

    let firstTodo = screen.getByLabelText(/learn jest/i);
    expect(firstTodo.closest('label')).toHaveClass('completed');
})