import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Input
} from "../Form";
import {
  Container,
  Button,
  ListGroup,
  ListGroupItem,
  Col,
  Row,
  Form
} from 'react-bootstrap';
import API from "../../utils/API";
import './style.css';

class GameOver extends Component {

  state = {
    name: ""
  }

  saveScore = (event) => {

    event.preventDefault()
    API.saveScore({
      name: this.state.name,
      score: this.props.score,
      level: this.props.level
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  };

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
            <Form>
              <Row>
                <Col lg='2' md='2' sm='2' />
                <Col>
                  <Input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="Username (required)"
                  />
                  <Button
                    variant='success'
                    disabled={!(this.state.name)}
                    onClick={this.saveScore}
                  >
                    Submit
                </Button>
                </Col>
                <Col lg='2' md='2' sm='2' />
              </Row>
            </Form>
          </Col>
        </Row>
        <Row className='justify-content-center text-center'>
          <ListGroup>
            <ListGroupItem as={Button} className='btn-light' onClick={() => this.props.newGame()}>
              Play Again
            </ListGroupItem>
            <ListGroupItem as={Link} action variant="default" to="./highscore">
              High Scores
            </ListGroupItem>
          </ListGroup>
        </Row>
      </Container>
    )
  }

}

export default GameOver;