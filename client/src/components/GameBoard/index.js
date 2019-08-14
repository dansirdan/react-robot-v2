import React, { Component } from "react";
import {
  Row
} from 'react-bootstrap';
import "./style.css";
import GamePiece from '../GamePiece';

class GameBoard extends Component {

  render() {
    return (
      <div className="game-screen">
        <Row>
          <GamePiece
            makeGuess={this.props.makeGuess}
            id={1}
            color={"red"}
            sound={"beep"}
          />
          <GamePiece
            makeGuess={this.props.makeGuess}
            id={2}
            color={"blue"}
            sound={"bop"}
          />
        </Row>
        <Row>
          <GamePiece
            makeGuess={this.props.makeGuess}
            id={3}
            color={"green"}
            sound={"EET"}
          />
          <GamePiece
            makeGuess={this.props.makeGuess}
            id={4}
            color={"yellow"}
            sound={"boop"}
          />
        </Row>
      </div>
    );
  }

}

export default GameBoard