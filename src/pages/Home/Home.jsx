import React from 'react';
import axios from 'axios';
import Weather from '../../components/Weather/Weather.jsx';

class Home extends React.Component{
    state={
        weather: null
    }
    getUserLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
              let lat = position.coords.latitude;
              let long = position.coords.longitude;
              this.getWeather(lat, long)
      })
    }
    getWeather = async(latitude, longitude) => {
         try{
           const url = `${process.env.REACT_APP_ENDPOINT}/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${process.env.REACT_APP_KEY}`;
           const {data} = await axios(url);
           this.setState({weather: data});
         }catch(err){
            console.log(err)
         }
    }
    componentDidMount() {
        this.getUserLocation();
    }
    render() {
        return(
           <>
            {this.state.weather && <Weather weather={this.state.weather} />}
           </>
        )
    }
}

export default Home