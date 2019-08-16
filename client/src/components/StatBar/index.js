import React from 'react';
import {
  // Container,
  Nav,
  Col,
  // Row,
  ProgressBar
} from 'react-bootstrap';
import './style.css';

function StatBar(props) {

  return (
    <Nav className='navbar-dark bg-dark'>
      <Col md='6' className='text-left w-100'>
        <h6>REACT, ROBOT</h6>
      </Col>
      <Col md='6' className='text-right w-100'>
        <h6>Level {props.level}</h6>
        <ProgressBar animated now={props.progress} />
        <h6>Score: {props.score}</h6>
        <h6>Lives: {props.lives}</h6>
      </Col>
    </Nav>
  );

}

export default StatBar;