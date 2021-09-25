import React from 'react';
import axios from 'axios';


class Location extends React.Component{
    state={
        weather: {}
    }
    getWeather = async(city) => {
       const {data} = await axios(`${process.env.REACT_APP_ENDPOINT}/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_KEY}`);
       this.setState({weather: data})
    }
    componentDidUpdate(prevProps) {
        if(this.props.match.params.city !== prevProps.match.params.city) {
          this.getWeather(this.props.match.params.city)
        }
    }

    componentDidMount(){
        this.getWeather(this.props.match.params.city)
        console.log(this.props.match.params.city)
    }
    render() {
        console.log(this.state.weather)
        return(
            <>
            
            </>
        )
    }
}

export default Location