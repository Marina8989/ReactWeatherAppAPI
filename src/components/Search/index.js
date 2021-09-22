import React from 'react';
import {Input} from  './Search.styles';


class Search extends React.Component{
    state={
        inputValue: ''
    }
    handleChange = (e) => {
        this.setState({inputValue: e.target.value});
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({inputValue: ''});
    }
    render(){
       return (
        <form onSubmit={this.handleSubmit}>
            <Input value={this.state.inputValue} onChange={this.handleChange}/>
        </form>
     )
    }
}

export default Search;