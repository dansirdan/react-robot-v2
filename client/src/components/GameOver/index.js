import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Button,
  ListGroup,
  ListGroupItem,
  Col,
  Row,
  Jumbotron
} from 'react-bootstrap';

function GameOver() {
  return (
    <Container>
      <Row className='justify-content-center text-center'>
        <ListGroup>
          <ListGroupItem as={Link} action variant="light" to="./play">
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

export default GameOver;