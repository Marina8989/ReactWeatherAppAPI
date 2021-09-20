import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background: linear-gradient(
    to bottom right,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.05)
    );
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.5), -1px -1px 2px #aaa,
    1px 1px 2px #555;
    backdrop-filter: blur(0.8rem);
    padding: 1.5rem;
    border-radius: 1rem;
    animation: 1s cubic-bezier(0.16, 1, 0.3, 1) cardEnter;
    width: 990px;
    height: 550px;
    margin: auto;
    text-align: center;
`
const Input = styled.input`
     background: rgba(256, 256, 256, .3);
     padding: .6rem 12rem;
     margin: .3rem 0;
     border-radius: 3px;
     border: none;
     outline: none;
     color: white;
     font-size: 1rem;
`

class Home extends React.Component {
    render() {
       return(
        <StyledDiv className="card">
            <Input placeholder="Enter city..." />
        </StyledDiv>
     )
    }
}


export default Home