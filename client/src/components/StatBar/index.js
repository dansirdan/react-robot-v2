import React from 'react';
import {
  Container,
  ListGroup,
  ListGroupItem,
  Col,
  Row,
  Jumbotron,
  ProgressBar
} from 'react-bootstrap';

function StatBar(props) {

  return (
    <Container>
      <Row>
        <Col>
          <h6>Level {props.level}</h6>
          <ProgressBar animated now={props.progress} />
          <h6>Score: {props.score}</h6>
          <h6>Lives: {props.lives}</h6>
        </Col>
      </Row>
    </Container>
  );

}

export default StatBar;