import React from "react";
import { render, screen } from '@testing-library/react'
import Footer from './Footer';
import '@testing-library/jest-dom'


test("render todos Footer first line", () => {
    render(<Footer/>)
    expect(screen.getByText("Double-click to edit a todo")).toBeInTheDocument();
});

test("render todos Footer second line with link", () => {
    render(<Footer/>)
    expect(screen.getByText("Creat by")).toBeInTheDocument();
})

test("render todos Footer second line with link", () => {
    render(<Footer/>)
    expect(screen.getByText("Part of")).toBeInTheDocument();
})

test("render link 1", () => {
    render(<Footer/>);
    expect(screen.getByTestId("link1")).toBeInTheDocument();
})

test("render link 1", () => {
    render(<Footer/>);
    expect(screen.getByTestId("link2")).toBeInTheDocument();
})