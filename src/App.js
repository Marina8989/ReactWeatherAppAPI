import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import styled from 'styled-components';

const StyledNav = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 2rem;
`
const StyledList = styled.li`
    list-style: none;
    
`
const StyledLink = styled(Link)`
   font-size: 1.6rem;
   font-weight: bold;
   text-decoration: none;
   color: white;
   &:hover{
     color: rgb(156, 40, 78);
   }
`

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <StyledNav>
            <StyledList>
              <StyledLink to="/">Home</StyledLink>
            </StyledList>
            <StyledList>
              <StyledLink to="/about">About</StyledLink>
            </StyledList>
          </StyledNav>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

