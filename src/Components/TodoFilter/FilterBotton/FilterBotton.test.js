import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterBotton from "./FilterBotton";

test("render three buttons", () => {
    render(<FilterBotton />)
    expect(screen.getByRole('button',{name:/All/i})).toBeInTheDocument();
    expect(screen.getByRole('button',{name:/Active/i})).toBeInTheDocument();
    expect(screen.getByRole('button',{name:/Completed/i})).toBeInTheDocument();
})