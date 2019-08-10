import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {
  Container,
  // Button,
  // ListGroup,
  // ListGroupItem,
  // Row,
  Jumbotron
} from 'react-bootstrap';
import StatBar from '../components/StatBar';
import GameBoard from '../components/GameBoard';
import GamePiece from '../components/GamePiece';
import DemoBoard from '../components/DemoBoard';
import GameOver from '../components/GameOver';
import RobotTalk from '../components/RobotTalk';

class Game extends Component {

  state = {
    gameMode: 'play',
    turn: 'init',
    score: 0,
    level: 1,
    prgoress: 0,
    lives: 3,
    gameArray: [],
    userArray: [],
    gameArrayLength: 3,
    counter: 3,
    clickCount: 0
  }

  newGame = () => {
    this.setState({
      gameMode: "play",
      gameArray: [],
      userArray: [],
      clickCount: 0,
      turn: "init",
      gameArrayLength: 3,
      score: 0
    })
  }

  endGame = () => {
    this.setState({
      gameMode: "gameOver"
    })
  }

  win = () => {
    if (this.state.counter === 4) {
      this.setState({
        gameArrayLength: this.state.gameArrayLength + 1,
        counter: 0
      })
    }
    this.setState({
      gameArray: [],
      userArray: [],
      clickCount: 0,
      turn: "correct",
      counter: this.state.counter + 1,
      score: this.state.score + 1,
    })
  }

  handleGameArray = () => {
    let length = this.state.gameArrayLength;
    let RNG;
    let initArray = [];

    for (let i = 0; i < length; i++) {
      RNG = Math.ceil(Math.random() * 4);
      initArray.push(RNG);
    }
    console.log(initArray);

    this.setState({
      turn: "comp",
      gameArray: initArray
    })
  }

  handleGameMode = () => {
    switch (this.state.gameMode) {
      case 'play':
        return (
          <this.handleTurn
          />
        )
      case 'gameOver':
        return (
          <GameOver />
        )
      default:
        break;
    }
  };

  changeTurn = str => {
    this.setState({
      turn: str
    })
  };

  handleTurn = () => {
    switch (this.state.turn) {
      case 'init':
        this.handleGameArray()
        return null
      case 'comp':
        return (
          <DemoBoard
            changeTurn={this.changeTurn}
            gameArray={this.state.gameArray}
          />
        )
      case 'user':
        this.compareArrays(this.state.clickCount === this.state.gameArrayLength)
        return null
      case 'correct':
        return (
          <DemoBoard />
        )
      case 'incorrect':
        return (
          <DemoBoard />
        )
      default:
        break;
    }
  }

  compareArrays = Boolean => {
    if (!Boolean) {
      return (
        <div className="game-screen row">
          {this.state.gamePieces.map(gamePiece => (
            <GamePiece
              makeGuess={this.makeGuess}
              id={gamePiece.id}
              key={gamePiece.id}
              color={gamePiece.color}
              image={gamePiece.image}
              sound={gamePiece.sound}
            />
          ))}
        </div>
      );
    }

    if (this.state.userArray.toString() !== this.state.gameArray.toString()) {
      this.lose();
      if (this.state.lives === 0) {
        this.endGame();
      }
      return null
    } else if (this.state.userArray.toString() === this.state.gameArray.toString()) {
      this.win();
      return null
    }
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <this.handleGameMode />
        </Jumbotron>
      </Container>
    );
  }


}

export default Game;