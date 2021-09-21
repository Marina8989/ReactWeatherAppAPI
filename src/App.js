import React from 'react';
import Weather from './Weather';

class App extends React.Component{
    render() {
        return(
            <>
              <h1>Weather App</h1>
              <Weather />
            </>
        )
    }
}

export default App