import React from 'react';

const Weather = ({weather: {weather, main, name, wind}}) => {
    return(
        <div>
          {!!weather && (
              <>
                <div>
                    <h3>{name}</h3>
                    <li>{weather[0].main}</li>
                    <li>Wind: {wind.speed}mph</li>
                    <li>Wind Gusts: {wind.gust}mph</li>
                    <li>Humidity: {main.humidity}</li>
                </div>
              </>
          )}
        </div>
    )
}

export default Weather