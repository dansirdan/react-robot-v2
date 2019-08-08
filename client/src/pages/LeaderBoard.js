import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LeaderBoard extends Component {
  render() {
    return (
      <div className="App">
        <h1>Leader Board</h1>
        <Link to={'./'}>
          <button variant="raised">
            Home
        </button>
        </Link>
      </div>
    );
  }
}

export default LeaderBoard;