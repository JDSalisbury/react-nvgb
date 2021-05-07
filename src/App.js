import React from 'react';
import './static/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home, About } from './screens'
function App() {

  return (
    <div >
      <h1 class='header'>Header</h1>
      <Router>
        <div class="demo" augmented-ui="tl-clip b-clip-x tr-clip exe" >
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="content-area" augmented-ui=" tl-clip-x tr-clip-x bl-clip br-clip exe">

          <Switch class='content'>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}


export default App;
