import React from 'react';
import Form from './Form';
import List from './List';
import {Link} from 'react-router-dom';
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
    
    render(){
        return(
            <>
              <h2>Weather App</h2>
               <Link to='/'>Current Location</Link>
              <Form handleSubmit={this.handleSubmit}/>
              <List list={this.state.list} />
            </>  
        )
    }
}

export default City