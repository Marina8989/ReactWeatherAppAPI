import React from 'react';
import City from './components/City';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component{
    render() {
        return(
            <Router>
                <div>
                    <Link to='/'>Main Page</Link><br />
                    <Link to='/components/City'>Cities</Link>
                </div>
                <Switch>
                   <Route path='/' exact />
                       
                   
                   <Route path='/components/City'>
                       <City />
                   </Route>
                </Switch>
            </Router>
        )
    }
}

export default App