import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Jumbotron
} from 'react-bootstrap';
import StatBar from '../components/StatBar';
import GameBoard from '../components/GameBoard';
import DemoBoard from '../components/DemoBoard';
import Correct from "../components/Correct";
import Incorrect from "../components/Incorrect";
import LevelUp from "../components/LevelUp";
import GameOver from '../components/GameOver';
import RobotTalk from '../components/RobotTalk';

class Game extends Component {

  state = {
    gameMode: 'play',
    turn: 'init',
    score: 0,
    level: 1,
    progress: 0,
    lives: 3,
    gameArray: [],
    userArray: [],
    gameArrayLength: 3,
    robotTalk: "",
    counter: 1,
    clickCount: 0
  }

  // state reset
  newGame = () => {
    this.setState({
      gameMode: 'play',
      turn: 'init',
      score: 0,
      level: 1,
      progress: 0,
      lives: 3,
      gameArray: [],
      userArray: [],
      gameArrayLength: 3,
      robotTalk: "",
      counter: 1,
      clickCount: 0
    })
  }

  resetRobotTalk = () => {
    this.setState({
      robotTalk: ""
    })
  }

  // endGame without deleting the data
  endGame = () => {
    this.setState({
      gameMode: "gameOver"
    })
  }

  // user's clicks are recorded and pushed to an array
  makeGuess = (id, sound) => {

    let noise = sound;

    this.setState({
      robotTalk: this.state.robotTalk + " " + noise,
      userArray: [...this.state.userArray, id],
      clickCount: this.state.clickCount + 1
    });
  }

  // runs on correct array pattern input
  correct = () => {

    this.setState({
      score: this.state.score + 1000 * this.state.level,
      progress: this.state.progress + 25,
      gameArray: [],
      userArray: [],
      clickCount: 0,
      counter: this.state.counter + 1,
    })

    this.checkProgress();

  }

  // checking the progress/level bar
  checkProgress = () => {
    if (this.state.counter === 4) {
      this.changeProgress()
    } else {
      this.changeTurn('correct')
    }
  }

  // change level and reset progress bar
  changeProgress = () => {
    this.changeTurn('level-up')
    setTimeout(
      function () {
        this.setState({
          level: this.state.level + 1,
          gameArrayLength: this.state.gameArrayLength + 1,
          progress: 0,
          counter: 1
        })
      }.bind(this), 2000);
  }

  // runs on incorrect array input
  incorrect = () => {

    this.setState({
      lives: this.state.lives - 1,
      gameArray: [],
      userArray: [],
      clickCount: 0,
    })

    this.checkLives();

  }

  // ...
  checkLives = () => {
    if (this.state.lives === 1) {
      this.endGame();
    } else if (this.state.lives > 1) {
      this.changeTurn("incorrect")
    }
  }

  // setTimeout to see results
  showResults = () => {
    setTimeout(
      function () {
        this.changeTurn("init");
        this.resetRobotTalk();
      }.bind(this), 3000);
  }

  // initialize game array based off of length and level
  handleGameArray = () => {
    let length = this.state.gameArrayLength;
    let RNG;
    let initArray = [];

    for (let i = 0; i < length; i++) {
      RNG = Math.ceil(Math.random() * 4);
      initArray.push(RNG);
    }

    this.setState({
      turn: "comp",
      gameArray: initArray
    })
  }

  // ...
  handleGameMode = () => {
    switch (this.state.gameMode) {
      case 'play':
        return (
          <this.handleTurn />
        )
      case 'gameOver':
        return (
          <GameOver
            newGame={this.newGame}
            score={this.state.score}
            level={this.state.level}
          />
        )
      default:
        break;
    }
  };

  // ...does just that
  changeTurn = str => {
    // switch (str) {
    //   case "correct":
    //     this.setState({
    //       robotTalk: "VeRy smARt HuMAn"
    //     })
    //     break;
    //   case "incorrect":
    //     this.setState({
    //       robotTalk: "Wow...ThAt was, something."
    //     })
    //     break;
    //   case "level-up":
    //     this.setState({
    //       robotTalk: "YoU HaVe reCievEd an upgrade."
    //     })
    //     break;
    //   default:
    //     break;
    // }
    this.setState({
      turn: str
    })
  };

  // ...don't know if I use this
  changeGameMode = str => {
    this.setState({
      gamemode: str
    })
  };

  // ...
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
        return (
          <Correct
            showResults={this.showResults}
          />
        )
      case 'incorrect':
        return (
          <Incorrect
            showResults={this.showResults}
          />
        )
      case 'level-up':
        return (
          <LevelUp
            showResults={this.showResults}
          />
        )
      default:
        break;
    }
  }

  // Main compare comp vs user array
  compareArrays = props => {
    if (!props.compare) {
      return (
        <GameBoard
          makeGuess={this.makeGuess}
        />
      )
    }

    if (props.userArray.toString() !== props.gameArray.toString()) {
      this.incorrect();
      return null
    } else if (props.userArray.toString() === props.gameArray.toString()) {
      this.correct();
      return null
    }
  }

  render() {
    return (
      <Container className='main-container'>
        <Jumbotron>
          {this.state.gameMode !== "gameOver" ?
            (
              <Row>
                <Col>
                  <StatBar
                    score={this.state.score}
                    level={this.state.level}
                    progress={this.state.progress}
                    lives={this.state.lives}
                  />
                </Col>
              </Row>
            )
            :
            <></>
          }

          <Row>
            <Col lg='3' md='3' sm='1' />
            <Col lg='6' md='6' sm='8'>
              {this.handleGameMode()}
            </Col>
            <Col lg='3' md='3' sm='1' />
          </Row>
          {/* <Row>
            <Col>
              <RobotTalk
                robotTalk={this.state.robotTalk}
              />
            </Col>
          </Row> */}
        </Jumbotron>
      </Container>
    );
  }


}

export default Game;