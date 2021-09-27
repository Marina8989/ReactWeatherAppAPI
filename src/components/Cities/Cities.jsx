import React from 'react';
import {Link} from 'react-router-dom';

class Cities extends React.Component{
    state={
        list: [],
        inputValue: ''
    }
    handleChange = (e) => {
       this.setState({inputValue: e.target.value});
    }
    handleSubmit = (e, value) => {
        e.preventDefault();
        const item = {
            id: `${Math.random() * 20}`,
            value
        }
        const newList = [...this.state.list, item];
      
        if(this.state.list.find(el => el.value.toLowerCase() === value.toLowerCase())) {
           this.setState({inputValue: ''});
           return
        }else {
            this.setState({list: newList, inputValue: ''});
        }

        this.setState({list: newList, inputValue: ''});
       
    }
    handleDelete = (item) => {
       const newList = this.state.list.filter(element => element.id !== item.id);
       this.setState({list: newList});
    }
    render(){
        return(
           <> 
              <form onSubmit={(e) => this.handleSubmit(e, this.state.inputValue)}>
                  <input value={this.state.inputValue} onChange={this.handleChange} style={{border: '1px solid green'}}/>
              </form><br />
              <Link to='/'>Current Location</Link>
               
             <div style={{display: 'flex'}}>
                {this.state.list.map((city) => {
                    const {id, value} = city;
                    return (
                        <div key={id} style={{display: 'flex', justifyContent: 'center', height: '30px', margin: ' 0 15px 15px 5px'}}>
                            <Link to={`/city/${value}`} style={{marginTop: '6px'}}>{value}</Link>
                            <button onClick={() => this.handleDelete(city)} style={{color: 'red', marginTop: '5px'}}>x</button>
                        </div>
                    )
                })}
              </div>
           </>
        )
    }
}

export default Cities