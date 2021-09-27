import React from 'react';
import Cities from './components/Cities/Cities.jsx';
import City from './pages/City/City.jsx';
import Home from './pages/Home/Home.jsx';
import {Switch, Route} from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <div>
              <Cities />
              <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/city/:cityId' component={City} />
              </Switch>
            </div>
        )
    }
}

export default App