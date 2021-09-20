import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Input = styled.input`
    border: 1px solid green;
`

class Weather extends React.Component{
    state={
        city: '',
        isLoading: false,
        hasError: false,
        inputValue: ''
    }
     getCity = async(location) => {
       this.setState({isLoading: true});
       try{
           const {data} = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=cf0935aed5ebe289554f82291e75803f`);
           this.setState({city: data, isLoading: false});
       }catch(err){
          this.setState({hadError: true})
       }
     }
      handleChange = (e) => {
        this.setState({inputValue: e.target.value});
      }

      handleSubmit = (e) => {
          e.preventDefault();
          this.getCity(this.state.inputValue);
          this.setState({inputValue: ''});
      }

    render(){
        console.log(this.state.city)
        return(
            <>
              <h3>test</h3>
              <form onSubmit={this.handleSubmit}>
                  <Input value={this.state.inputValue} onChange={this.handleChange}/>
              </form>
              {this.state.hasError && <h3>Please try again...</h3>}
            </>
        )
    }
}

export default Weather