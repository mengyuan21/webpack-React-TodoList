import React from "react";
import { render, screen } from "@testing-library/react";
import TodoInput from "./TodoInput";
import "@testing-library/jest-dom";

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