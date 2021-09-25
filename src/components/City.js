import React from 'react';
import Form from './Form';
import List from './List';
import axios from 'axios';

class City extends React.Component{
    state={
        list: [],
        isLoading: false
    }
    handleSubmit = (value) => {
       this.setState({isLoading: true});
       const item = {
           id: `${Math.random() * 20}`,
           value
       }
       const newList = [...this.state.list, item];
       this.setState({list: newList});
    }
    handleDelete = (item) => {
        console.log('delete');
    }
    
    render(){
        return(
            <>
              <h2>Weather App</h2>
              <Form handleSubmit={this.handleSubmit}/>
              <List list={this.state.list} handleDelete={this.handleDelete}/>
            </>  
        )
    }
}

export default City