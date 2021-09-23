import React from 'react';
import City from './components/City';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component{
    render() {
        return(
            <Router>
                <div>
                    <Link to='/'>Home (Main Page)</Link>
                </div>
                <Switch>
                   <Route path='/'>
                       <City />
                   </Route>
                </Switch>
            </Router>
        )
    }
}

export default App