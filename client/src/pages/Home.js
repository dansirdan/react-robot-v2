import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Robot</h1>
        {/* Link to List.js */}
        <Link to={'./highscore'}>
          <button variant="raised">
            High Scores TEST
        </button>
        </Link>
        <Link to={'./play'}>
          <button variant="raised">
            Play Game
        </button>
        </Link>
      </div>
    );
  }
}
export default Home;