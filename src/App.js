import React from 'react';
import Cities from './components/Cities/Cities.jsx';
import City from './pages/City/City.jsx';
import {Switch, Route} from 'react-router-dom';

class App extends React.Component{
    render(){
        return(
            <div>
              <Cities />
              <Switch>
                  <Route path='/city/:id' component={City} />
              </Switch>
            </div>
        )
    }
}

export default App