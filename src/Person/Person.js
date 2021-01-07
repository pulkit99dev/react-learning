import React from 'react';
import './Person.css';
import styled from 'styled-components'
// import Radium from 'radium'

const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    margin-bottom: 10px;
    border:1px solid gray;
    border-radius: 4px;
    box-shadow: 0 2px 3px gray;
    padding: 16px;
    text-align: center;

    @media (min-width : 500px){
            width: 450px;
    }
    `;

const person = (props) =>{

    const style ={
        '@media (min-width : 500px)': {
                width: '450px'
        }
    }

    return(
    <StyledDiv>
    <p onClick={props.click}>I am {props.name} & {props.age} years old</p>
    <p>{props.children}</p>
    <input type= 'text' onChange={props.changed} value={props.name} />
    </StyledDiv>
    )
    }
export default person;