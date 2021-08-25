import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
position: relative;
left: 10px;
border-width: 0;
background: transparent;
outline-width: 0px;
margin-right: 15px;
margin-top:8px;
color: rgb(161, 159, 159);
border-radius:5px;
background-color: white;
&:hover{
    border-width: 1px;
    border-color: rgb(216, 144, 156); 
}
`;

export default function FilterBotton({handler}) {

    return (
        <div className="filter-buttons" >
                <Button data-testid="filter-button" onClick={() => handler("all")} > All </Button>
                <Button onClick={() => handler("active")} > Active </Button>
                <Button onClick={() => handler("complete")} > Completed </Button>
        </div>  
    )


}
