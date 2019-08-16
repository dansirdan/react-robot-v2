import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {
  Container,
  // Button,
  ListGroup,
  ListGroupItem,
  // Col,
  Row,
  // Jumbotron
} from 'react-bootstrap';

class Correct extends Component {

  componentDidMount() {
    this.props.showResults();
  }

  render() {
    return (
      <Container>
        <Row className='justify-content-center text-center'>
          <ListGroup>
            <ListGroupItem variant="light">
              That Was Correct
            </ListGroupItem>
          </ListGroup>
        </Row>
      </Container>
    )
  }
}


export default Correct;