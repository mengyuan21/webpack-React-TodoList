import React from "react";
import { fireEvent, render, screen, toHaveStyle } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/react";
import FilterBotton from "./FilterBotton";

test("render three buttons", () => {
    render(<FilterBotton />)
    expect(screen.getByRole('button',{name:/All/i})).toBeInTheDocument();
    expect(screen.getByRole('button',{name:/Active/i})).toBeInTheDocument();
    expect(screen.getByRole('button',{name:/Completed/i})).toBeInTheDocument();
})

test('should get style from filter buttom', () => {
    render(<FilterBotton/>)
    expect(screen.getByTestId("filter-button")).toHaveStyle(
        `color: rgb(161, 159, 159);`
    )
})

// test('shoule get hover style from filter button', () => {
//     render(<FilterBotton/>)
//     userEvent.hover(screen.getByTestId("filter-button"))
//     expect(screen.getByTestId("filter-button")).toHaveStyle(
//         ` border-color: rgb(216, 144, 156);  `
//     )
// })