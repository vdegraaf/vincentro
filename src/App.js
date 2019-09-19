import React from 'react';
import NavBar from './components/layouts/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Official from './components/pages/Official';

import PlayerState from './context/players/PlayerState';

const App = () => {
  return (
    <PlayerState>
      <div className='App'>
        <NavBar />
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/501' component={Official} />
          </Switch>
        </Router>
      </div>
    </PlayerState>
  );
};

export default App;
