import React from 'react';
import Form from './Form';

const Item = (props) => {
   return(
       <li>{props.item.value}</li>
   )
}

const List = (props) => {
   return(
       <ol>
           {props.list.map(item => <Item key={item.id} item={item} />)}
       </ol>
   )
}

class City extends React.Component{
    state={
        list: [],

    }
    handleSubmit = (value) => {
       const item = {
           id: `${Math.random() * 20}`,
           value
       }
       const newList = [...this.state.list, item];
       this.setState({list: newList});
       localStorage.setItem('list', JSON.stringify(newList));
    }
    componentDidMount() {
        const newList = JSON.parse(localStorage.getItem('list')) || [];
        this.setState({list: newList});
    }
    render(){
        return(
            <>
            <h2>Weather App</h2>
             <Form handleSubmit={this.handleSubmit}/>
             <List list={this.state.list} onClick={this.handleClick}/>
            </> 
        )
    }
}


export default City;