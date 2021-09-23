import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    border: 1px solid green
`

class Form extends React.Component{
    state={
        inputValue: ''
    }
    handleChange = (e) => {
      this.setState({inputValue: e.target.value});
    }
    handleSubmit = (e) => {
       e.preventDefault();
       const value = this.state.inputValue;
       this.setState({inputValue: ''});
       this.props.handleSubmit(value);
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <Input value={this.state.inputValue} onChange={this.handleChange} />
            </form>
        )
    }
}

export default Form;