import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Jumbotron
} from 'react-bootstrap';


function Home() {
  return (
    <Container>
      <Jumbotron>
        <Row className="justify-content-center">
          <h1>REACT ROBOT</h1>
        </Row>
        <Row className="justify-content-center text-center">
          <ListGroup>
            <ListGroupItem as={Link} action variant="light" to="./tutorial">
              Tutorial
              </ListGroupItem>
            <ListGroupItem as={Link} action variant="light" to="./play">
              Play
              </ListGroupItem>
            <ListGroupItem as={Link} action variant="light" to="./highscore">
              High Scores
              </ListGroupItem>
          </ListGroup>
        </Row>
      </Jumbotron>
    </Container>
  );
}
export default Home;