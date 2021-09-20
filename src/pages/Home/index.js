import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
    animation: 1s cubic-bezier(0.16, 1, 0.3, 1) cardEnter;
    width: 990px;
    height: 550px;
    margin: auto;
    text-align: center;
`
const Input = styled.input`
     background: rgba(256, 256, 256, .3);
     padding: .6rem 12rem;
     margin: .3rem 0;
     border-radius: 3px;
     border: none;
     outline: none;
     color: white;
     font-size: 1rem;
`

const API_KEY = 'cf0935aed5ebe289554f82291e75803f';

class Home extends React.Component {
    state={
        isLoading: false,
        hasError: false,
        location: null,
        inputValue: ''
    }
     
    getLocation = async (city) => {
        this.setState({isLoading: true});
        try{
            const {data} = await axios(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            console.log(data);
            this.setState({location: data, isLoading: false});
            console.log(this.state.location)
        }catch(err) {
          this.setState({hasError: true});
        }
    }
    handleChange = (e) => {
       this.setState({location: e.target.value});
    }

    handleSubmit = (e) => {
       e.preventDefault();
       console.log(this.state.location)
       this.setState({location: ''})
    }

   componentDidMount() {
      
   }
     
    render() {
       return(
        <StyledDiv className="card">
            <form onSubmit={this.handleSubmit}>
               <Input placeholder="Enter city..." value={this.state.location} onChange={this.handleChange}/>
            </form>

            {this.state.location && Object.keys(this.state.location).map(key => {
                  return (
                      <>
                        <span>{key}</span>
                        <span>{this.state.location[key]}</span>

                        {this.state.hasError && <h3>Please try again...</h3>}
                      </>
                  )
            })}
        </StyledDiv>
     )
    }
}


export default Home