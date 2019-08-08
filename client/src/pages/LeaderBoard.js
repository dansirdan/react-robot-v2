import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class LeaderBoard extends Component {
  render() {
    return (
      <div className="App">
        <h1>Leader Board</h1>
        <Link to={'./'}>
          <Button variant="primary">
            Home
        </Button>
        </Link>
      </div>
    );
  }
}

export default LeaderBoard;