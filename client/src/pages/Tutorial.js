import React from 'react';
import {
  Container,
  Jumbotron
} from 'react-bootstrap';
import ControlledCarousel from '../components/Carousel';

function Tutorial() {

  return (
    <Container>
      <Jumbotron>
        <ControlledCarousel />
      </Jumbotron>
    </Container>
  )
}

export default Tutorial;