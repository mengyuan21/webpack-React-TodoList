import React from "react";
import { render, screen } from "@testing-library/react";
import {Todo,  TodoNameNormal, TodoNameComplete}from "./Todo";
import "@testing-library/jest-dom";

test("render checkbox", () => {
    render(<Todo/>)
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
})

test("render todo name", () => {
    const mockTodo = {
        id:1,
        name:'Learn Jest',
        complete:true,
    }

    render(<Todo  todo={mockTodo}/>)
    expect(screen.getByText('Learn Jest')).toBeInTheDocument();
}) 

test("render delete button", () => {
    render(<Todo/>);
    expect(screen.getByRole('button')).toBeInTheDocument(); 
})