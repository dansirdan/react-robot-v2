import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Col,
  Row,
  Table
} from 'react-bootstrap';
import API from '../utils/API';

class LeaderBoard extends Component {

  state = {
    topTen: []
  }

  componentWillMount = () => {
    API.getScores()
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  render() {
    return (

      <Container>
        <Jumbotron>
          <Row className='justify-content-center text-center'>
            <h1>Leader Board</h1>
          </Row>
          <Row className='justify-content-center text-center'>
            <Table striped bordered hover variant='dark'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Username</th>
                  <th>Score</th>
                  <th>Level</th>
                </tr>
                <tbody>
                  {}
                </tbody>
              </thead>
            </Table>
          </Row>
          <Row className='justify-content-center text-center'>
            <ListGroup>
              <ListGroupItem as={Link} action variant="default" to="./">
                Home
            </ListGroupItem>
              <ListGroupItem as={Link} action variant="default" to="./play">
                Play Game
            </ListGroupItem>
            </ListGroup>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default LeaderBoard;