import React from 'react';
import City from './components/City';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component{
    render() {
        return(
            <Router>
              <City />
            <Switch>
              <Route path='/' exact />
            </Switch>
            <Route path='/:city' component={Location}/>
            </Router>
        )
    }
}

export default App