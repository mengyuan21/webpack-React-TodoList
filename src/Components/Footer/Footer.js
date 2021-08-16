import React from 'react';
import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer-text">
            <p> Double-click to edit a todo </p>
            <div> Creat by <a  data-testid="link1" href='https://github.com/mengyuan21?tab=repositories'> mengyuan </a> </div>
            <p> Part of <a data-testid="link2" href='https://github.com/mengyuan21?tab=repositories'>TodoMVC</a> </p>
        </div>
    )
}
