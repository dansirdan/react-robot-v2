import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Game from './pages/Game';
import LeaderBoard from './pages/LeaderBoard';

import './App.css';

class App extends Component {
  render() {
    // const App = () => (
    //   <div>
    //     <Switch>
    //       <Route exact path='/' component={Home} />
    //       <Route path='/play' component={Game} />
    //       <Route path='/highscore' component={LeaderBoard} />
    //     </Switch>
    //   </div>
    // )
    // return (
    //   <Switch>
    //     <App />
    //   </Switch>
    // );
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
            path='/play'
            component={Game}
          />
          <Route
            exact
            path='/highscore'
            component={LeaderBoard}
          />
        </Switch>
      </Router>
    )
  }
}

export default App;