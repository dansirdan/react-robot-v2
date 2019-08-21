import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Tutorial from './pages/Tutorial';
import Game from './pages/Game';
import LeaderBoard from './pages/LeaderBoard';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            component={Home}
          />
          <Route
            exact
            path='/tutorial'
            component={Tutorial}
          />
          <Route
            exact
            path='/play'
            component={Game}
          />
          <Route
            exact
            path='/highscore'
            component={LeaderBoard}
          />
        </Switch>
        <Footer />
      </Router>
    )
  }
}

export default App;