import React from 'react';
import Search from './components/Search';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

class App extends React.Component{
    render() {
        return(
            <Router>
                <div>
                    <Link to='/'>Home</Link>
                </div>
                <Switch>
                   <Route path='/'>
                       <Search />
                   </Route>
                </Switch>
            </Router>
        )
    }
}

export default App