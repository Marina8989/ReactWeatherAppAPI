import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const body = document.getElementsByTagName('body');

const Input = styled.input`
    padding: .7rem 3rem;
    margin: .4rem 0 2rem 0;
    border-radius: 5px;
    border: none;
`
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
    animation: 1s cubic-bezier(0.16, 1, 0.3, 1);
    width: 500px;
    height: 320px;
    margin: auto;
    text-align: center;
`
 

const KEY = 'cf0935aed5ebe289554f82291e75803f';
class Weather extends React.Component{
    state={
        city: '',
        isLoading: false,
        hasError: false,
        inputValue: '',
        // picture: ['./cloudy.png']
    }
     getCity = async(city, key) => {
       this.setState({isLoading: true});
       try{
           const {data} = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
           data.pic = 'https://www.clipartmax.com/png/middle/24-248404_open-cloudy-clipart.png';
           this.setState({city: data, isLoading: false});
           console.log(this.state.city)
           localStorage.setItem('city', JSON.stringify(this.state.city))
       }catch(err){
          this.setState({hadError: true})
       }
     }
      handleChange = (e) => {
        this.setState({inputValue: e.target.value});
      }

      handleSubmit = (e) => {
          e.preventDefault();
          this.getCity(this.state.inputValue, KEY);
          this.setState({inputValue: ''});
      }
      componentDidMount() {
          let city = JSON.parse(localStorage.getItem('city')) || '';
          this.setState({city})
      }
    render(){
        const hasLocation = !this.state.isLoading && this.state.city;
        console.log(this.state.city)
        return(
            <StyledDiv>
              {this.state.isLoading && <h4>Loading...</h4>}
              <form onSubmit={this.handleSubmit}>
                  <Input value={this.state.inputValue} onChange={this.handleChange}/>
              </form>
               {hasLocation && (
                   <div className="main">
                      <h2>{this.state.city.name}, {this.state.city.sys.country}</h2>
                      <h4>{this.state.city.weather[0].main}</h4>
                      <h6>{this.state.city.weather[0].description}</h6>
                   </div>
               )}
              {this.state.hasError && <h3>Please try again...</h3>}
            </StyledDiv>
        )
    }
}

export default Weather