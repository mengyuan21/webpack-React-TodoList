import React from "react";
import { fireEvent, getAllByRole, getByTestId, render, screen } from "@testing-library/react";
import TodoInput from "./TodoInput";
import "@testing-library/jest-dom";

const setup = () => {
    const utils = render(<TodoInput/>)
    const input = utils.getByTestId("input-keydown")
    return {
        input,
        ...utils,
    }
}


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
    const {input} = setup()
    expect(input.value).toBe('')
    fireEvent.change(input,{target:{value:"test onchange"}})
    expect(input.value).toBe("test onchange");
})
