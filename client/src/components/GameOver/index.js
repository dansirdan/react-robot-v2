import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScoreForm from '../ScoreForm';
import {
  Container,
  Button,
  ListGroup,
  ListGroupItem,
  Col,
  Row
} from 'react-bootstrap';
import './style.css';

class GameOver extends Component {

  state = {
    name: ""
  }

  // saveScore = (newScorer) => {

  //   console.log(newScorer);

  //   API.saveScore({
  //     name: newScorer,
  //     score: this.props.score,
  //     level: this.props.level
  //   })
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // };

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <Container>
        <Row className='text-center'>
          <Col className='record-box'>
            <h4>Record Your Score: {this.props.score}</h4>
            <ScoreForm
              // saveScore={this.saveScore}
              score={this.props.score}
              level={this.props.level}
            />
          </Col>
        </Row>
        <Row className='justify-content-center text-center'>
          <ListGroup>
            <ListGroupItem as={Button} className='btn-light' onClick={() => this.props.newGame()}>
              Play Again
            </ListGroupItem>
            <ListGroupItem as={Link} action variant="default" className='btn-success' to="./highscore">
              High Scores
            </ListGroupItem>
          </ListGroup>
        </Row>
      </Container>
    )
  }

}

export default GameOver;