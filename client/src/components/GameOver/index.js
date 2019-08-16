import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Input,
  FormBtn
} from "../Form";
import {
  Container,
  Button,
  ListGroup,
  ListGroupItem,
  // Col,
  Row,
  // Jumbotron,
  Form
} from 'react-bootstrap';
import API from "../../utils/API"

class GameOver extends Component {

  state = {
    name: ""
  }

  saveScore = scoreData => {
    API.saveScore({
      name: scoreData.name,
      score: scoreData.score,
      level: scoreData.level
    })
      .then(res => console.log(res))
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
        <Row className='justify-content-center text-center'>
          <Form>
            <Input
              value={this.state.name}
              onChange={this.handleInputChange}
              name="name"
              placeholder="Username (required)"
            />
            <FormBtn
              disabled={!(this.state.name)}
              onClick={() => this.saveScore({
                name: this.state.name,
                score: this.props.score,
                level: this.props.score
              })}
            >
              Submit
            </FormBtn>
          </Form>
        </Row>
        <Row className='justify-content-center text-center'>
          <ListGroup>
            <ListGroupItem as={Button} variant="light" onClick={() => this.props.newGame()}>
              Play Again
            </ListGroupItem>
            <ListGroupItem as={Link} action variant="light" to="./highscore">
              High Scores
            </ListGroupItem>
          </ListGroup>
        </Row>
      </Container>
    )
  }

}

export default GameOver;