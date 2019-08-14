import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {
  Container,
  // Button,
  // ListGroup,
  // ListGroupItem,
  Row,
  Col,
  Jumbotron
} from 'react-bootstrap';
import StatBar from '../components/StatBar';
import GameBoard from '../components/GameBoard';
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
    robotTalk: "",
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

  makeGuess = (id, sound) => {

    let noise = sound;

    console.log(id, sound);
    this.setState({
      robotTalk: this.state.robotTalk + " " + noise,
      userArray: [...this.state.userArray, id],
      clickCount: this.state.clickCount + 1
    });
  }

  win = () => {
    if (this.state.counter % 4 === 0) {
      this.setState({
        gameArrayLength: this.state.gameArrayLength + 1,
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

  lose = () => {
    this.setState({
      lives: this.state.lives - 1,
      gameArray: [],
      userArray: [],
      clickCount: 0,
      turn: "incorrect"
    })
    if (this.state.lives === 0) {
      this.endGame();
    } else {

    }
  }

  showResults = () => {
    setTimeout(
      function () {
        this.changeTurn("init")
      }.bind(this), 3000);
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
          <this.handleTurn />
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
        return (
          <this.compareArrays
            compare={this.state.clickCount === this.state.gameArrayLength}
            gameArray={this.state.gameArray}
            userArray={this.state.userArray}
          />
        )
      case 'correct':
        this.showResults();
        return null
      case 'incorrect':
        this.showResults();
        return null
      default:
        break;
    }
  }

  compareArrays = props => {
    if (!props.compare) {
      return (
        <GameBoard
          makeGuess={this.makeGuess}
        />
      )
    }

    if (props.userArray.toString() !== props.gameArray.toString()) {
      this.lose();
      return null
    } else if (props.userArray.toString() === props.gameArray.toString()) {
      this.win();
      return null
    }
  }

  render() {
    return (
      <Container>
        <Jumbotron>
          <Row>
            <Col>
              This is the stat bar
            </Col>
          </Row>
          <Row>
            <Col lg='3' md='3' sm='2' />
            <Col lg='6' md='6' sm='8'>
              <this.handleGameMode />
            </Col>
            <Col lg='3' md='3' sm='2' />
          </Row>
          <Row>
            <Col>
              This is the message div
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }


}

export default Game;