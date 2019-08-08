import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Game extends Component {
  render() {
    return (
      <div className="App">
        <h1>Game</h1>
        <Link to={'./'}>
          <button variant="raised">
            Home
        </button>
        </Link>
        <Link to={'./highscore'}>
          <button variant="raised">
            High Scores
        </button>
        </Link>
      </div>
    );
  }
}

export default Game;