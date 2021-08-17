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

test("rendet numbers of todos left", () => {
    render(<TodoFilter todos={mockTodos}/>)
    expect(screen.getByTestId("number-to-do")).toBe('3 left to do')
})