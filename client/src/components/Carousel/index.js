import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Button } from 'react-bootstrap';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel interval={null} activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/500x250.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Tutorial 1/2</h3>
          <p>Screen Overview</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/500x250.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Tutorial 2/2</h3>
          <p>Do your best to click the buttons in the exact order.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/500x250.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <Link to={'./play'}>
            <Button variant="primary">
              Play
            </Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;