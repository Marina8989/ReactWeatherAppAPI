import React from 'react';
import axios from 'axios';

class Weather extends React.Component{
    state={
        weather: null
    }
   getWeather = async(city) => {
       const API_KEY = 'cf0935aed5ebe289554f82291e75803f';
       const API_URL = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
       const {data} = await axios(API_URL);
       this.setState({weather: data})
   }
    render() {
        console.log(this.state.weather)
        console.log(List);
        return(
            <>
             <h3>{this.state.weather}</h3>
            </> 
        )
    }
}

export default Weather