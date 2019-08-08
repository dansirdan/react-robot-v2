import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Game extends Component {
  render() {
    return (
      <div className="App">
        <h1>Game</h1>
        <Link to={'./'}>
          <Button variant="primary">
            Home
          </Button>
        </Link>
        <Link to={'./highscore'}>
          <Button variant="primary">
            High Scores
        </Button>
        </Link>
      </div>
    );
  }
}

export default Game;