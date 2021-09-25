import React from 'react';

class Form extends React.Component{
    state={
        inputValue: ''
    }
    handleChange = (e) => {
       this.setState({inputValue: e.target.value});
    }
    handleSubmit = (e) => {
       e.preventDefault();
       this.props.handleSubmit(this.state.inputValue);
       this.setState({inputValue: ''})
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder='enter city name' value={this.state.inputValue} onChange={this.handleChange} />
            </form>
        )
    }
}

export default Form