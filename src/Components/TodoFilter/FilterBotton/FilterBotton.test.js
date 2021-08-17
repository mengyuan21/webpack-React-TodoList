import React from "react";
import { fireEvent, render, screen, toHaveStyle } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event'
import "@testing-library/react";
import FilterBotton from "./FilterBotton";

test("render three buttons", () => {
    render(<FilterBotton />)
    expect(screen.getByRole('button',{name:/All/i})).toBeInTheDocument();
    expect(screen.getByRole('button',{name:/Active/i})).toBeInTheDocument();
    expect(screen.getByRole('button',{name:/Completed/i})).toBeInTheDocument();
})

test('should get style from buttom', () => {
    render(<FilterBotton/>)
    expect(screen.getByTestId("filter-button")).toHaveStyle(
        ` background-color: white;`
    )
})

// test('should get hover style of button', () => {
//     render(<FilterBotton/>)
//     userEvent.hover(screen.getByText("All"))
//     // screen.debug(screen.getByText("All"))
//     expect(screen.getByText("All")).toHaveStyle(
//         `left: 10px;`
//     )
// })
