import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Robot</h1>
        {/* Link to List.js */}
        <Link to={'./highscore'}>
          <Button variant="primary">
            High Scores TEST
        </Button>
        </Link>
        <Link to={'./play'}>
          <Button variant="primary">
            Play Game
        </Button>
        </Link>
      </div>
    );
  }
}
export default Home;