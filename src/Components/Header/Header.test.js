import React from "react";
import { render, screen } from '@testing-library/react'
import Header from './Header';
import '@testing-library/jest-dom'


test("render todos Header", () => {
    render(<Header/>)
    expect(screen.getByText("todos")).toBeInTheDocument();
});