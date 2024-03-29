import React from 'react';
import './static/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home, About } from './screens'
import ParticlesBg from 'particles-bg'
import { Gradient } from 'react-gradient';

function App() {
  const gradients = [
    ['#d860f0', '#9060f0'],
    ['#a848a8', '#9030a8'],
    ['#9048c0', '#6048c0'],

  ];

  return (
    <Gradient
      gradients={gradients}
      property="background"
      duration={3000}
      angle="45deg"
    >
      <ParticlesBg type="cobweb" bg={true} />

      <Router>
        <div className="header-nav" augmented-ui="tl-clip b-clip-x tr-clip exe" >
          <h1 className='header'>Header</h1>
          <Link to="/">Home</Link> | <Link to="/about">About</Link>
        </div>

        <div className="content-area" augmented-ui=" tl-clip-x tr-clip-x bl-clip br-clip exe">

          <Switch className='content'>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Router>


    </Gradient>
  );
}


export default App;
