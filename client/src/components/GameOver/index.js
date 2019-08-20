import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
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
    successfulSubmit: false
  }

  successRedirect = () => {
    this.setState({
      successfulSubmit: true
    })
  }

  render() {
    return (

      this.state.successfulSubmit ?
        (
          <Redirect to="/highscore" />
        )
        :
        (
          <Container>
            <Row className='text-center'>
              <Col className='record-box'>
                <h1>GAME OVER</h1>
                <hr />
                <h6>FINAL SCORE</h6>
                <h5>{this.props.score}</h5>
                <ScoreForm
                  // saveScore={this.saveScore}
                  score={this.props.score}
                  level={this.props.level}
                  successRedirect={this.successRedirect}
                />
              </Col>
            </Row>
            <Row className='justify-content-center text-center'>
              <ListGroup>
                <ListGroupItem as={Button} className='btn-default' onClick={() => this.props.newGame()}>
                  Play Again
            </ListGroupItem>
                <ListGroupItem as={Link} action variant="default" className='btn-default' to="./highscore">
                  High Scores
            </ListGroupItem>
              </ListGroup>
            </Row>
          </Container>
        )
    )
  }

}

export default GameOver;