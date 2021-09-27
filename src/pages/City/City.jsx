import axios from 'axios';
import React from 'react';

class City extends React.Component{
    state={
        weather: null
    }
    getWeather = async(city) => {
      try{
        const {data} = await axios(`${process.env.REACT_APP_ENDPOINT}/weather?q=${city}&appid=${process.env.REACT_APP_KEY}`);
        this.setState({weather: data});
        //console.log('weather', this.state.weather.name)
      }catch(err){
          console.log(err);
          alert('Something went wrong')
      }
    }
    componentDidMount(){
        this.getWeather(this.props.match.params.id)
    }
    render() {
        console.log('weather:', this.state.weather)
        return(
             <>
               {this.state.weather && (
                   <>
                    <h3></h3>
                   </>
               )}
             </>
        )
    }
}

export default City