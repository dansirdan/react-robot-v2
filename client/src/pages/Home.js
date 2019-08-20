import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Jumbotron
} from 'react-bootstrap';

function Home() {
  return (
    <Container className='main-container'>
      <Jumbotron>
        <Row className="justify-content-center text-center">
          <Col>
            <h1>REACT ROBOT</h1>
            <hr />
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <ListGroup>
            {/* <ListGroupItem as={Link} action variant="default" to="./tutorial">
              Tutorial "coming soon"
              </ListGroupItem> */}
            <ListGroupItem as={Link} action variant="default" to="./play">
              Play
              </ListGroupItem>
            <ListGroupItem as={Link} action variant="default" to="./highscore">
              High Scores
              </ListGroupItem>
          </ListGroup>
        </Row>
      </Jumbotron>
    </Container>
  );
}
export default Home;