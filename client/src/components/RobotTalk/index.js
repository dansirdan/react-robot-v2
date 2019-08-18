import React, { Component } from 'react';
import {
  Container,
  Row
} from 'react-bootstrap';
import './style.css';

class RobotTalk extends Component {

  render() {
    return (
      <Container>
        <Row className='justify-content-center scroll-text'>
          <h4>{this.props.robotTalk}</h4>
        </Row>
      </Container>
    )
  }
}

export default RobotTalk;