import axios from 'axios';
import React from 'react';
import Weather from '../../components/Weather/Weather.jsx';

class City extends React.Component{
    state={
        weather: null
    }
    getWeather = async(city) => {
      try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.REACT_APP_KEY}`;
        const {data} = await axios(url);
        this.setState({weather: data});
        //console.log('weather', this.state.weather.name)
      }catch(err){
          console.log(err);
          alert('Something went wrong')
      }
    }
    componentDidMount(){
        this.getWeather(this.props.match.params.cityId);
    }
    componentDidUpdate(prevProps){
        if(this.props.match.params.cityId !== prevProps.match.params.cityId){
           this.getWeather(this.props.match.params.cityId);
        }
    }
    render() {
        console.log('weather:', this.state.weather)
        return(
             <>
               {this.state.weather && <Weather weather={this.state.weather} />}
             </>
        )
    }
}

export default City