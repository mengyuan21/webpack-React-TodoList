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




// test('renders App component', () => {        
//     const { getByTestId } = render(<App />);        
//     expect(getByTestId('display')).toHaveTextContent('0')        
//     fireEvent.click(getByTestId('button1'))        
//     expect(getByTestId('display')).toHaveTextContent('1')        
//     fireEvent.click(getByTestId('button2'))        
//     expect(getByTestId('display')).toHaveTextContent('2')        
//     fireEvent.click(getByTestId('button3'))        
//     expect(getByTestId('display')).toHaveTextContent('3')
//     });