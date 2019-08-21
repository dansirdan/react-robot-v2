import React from 'react';
import {
  Nav,
  Col,
  Row,
  ProgressBar
} from 'react-bootstrap';
import './style.css';

function StatBar(props) {

  return (
    <Nav className='navbar-dark bg-dark'>
      <Col className='text-left'>
        {/* <Row className='justify-content-center text-center'>
          <Col>
            <h1>REACT ROBOT</h1>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <ProgressBar animated now={props.progress} />
            <h6>Level {props.level}</h6>
            <h6>Score: {props.score}</h6>
            <h6>Lives: {props.lives}</h6>
          </Col>
        </Row>
      </Col>
    </Nav>
  );

}

export default StatBar;