import React from 'react';
import NavBar from './components/layouts/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Official from './components/pages/Official';
import Cricket from './components/pages/Cricket';

import GameState from './context/game/GameState';
import OfficialState from './context/official/OfficialState';

const App = () => {
  return (
    <GameState>
      <OfficialState>
        <div className='App'>
          <Router>
            <NavBar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/501' component={Official} />
              <Route exact path='/cricket' component={Cricket} />
            </Switch>
          </Router>
        </div>
      </OfficialState>
    </GameState>
  );
};

export default App;
