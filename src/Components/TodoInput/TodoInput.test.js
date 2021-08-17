import React from "react";
import { fireEvent, getAllByRole, getByTestId, render, screen } from "@testing-library/react";
import TodoInput from "./TodoInput";
import "@testing-library/jest-dom";


const mockSubmit = jest.fn()

test("render checkbox", () => {
    render(<TodoInput/>)
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
})

test("render input", () => {
    render(<TodoInput/>)
    expect(screen.getByRole('textbox')).toBeInTheDocument();
})

test("render input", () => {
    render(<TodoInput/>)
    expect(screen.getByPlaceholderText("What needs to be done ?")).toBeInTheDocument();
})

test(" input should return value when onChange was called", () => {
    render(<TodoInput handleSubmit={mockSubmit}/>)
    fireEvent.change(screen.getByTestId("input-keydown"),{target:{value:"test onchange"}})
    expect(screen.getByTestId("input-keydown").value).toBe("test onchange");
})

test(" input should called onKeyDown when keyDown", () => {
    render(<TodoInput handleSubmit={mockSubmit}/>)
    fireEvent.keyDown(screen.getByTestId("input-keydown"),{key:'Enter', keyCode:'13'})
    expect(mockSubmit).toBeCalled() 
})

