import React, { Component } from "react";
import {
  Row,
  Col
} from 'react-bootstrap';
import "./style.css";

class GamePiece extends Component {

  render() {
    return (
      <Col lg='6' md='6' sm='6' className='square' id="gamePiece">
        <div className="rounded-button"
          id={this.props.id}
          role="button"
          onClick={() => this.props.makeGuess(this.props.id, this.props.sound)}
          style={{
            background: this.props.color
          }}
        />
      </Col>
    )
  }
};

export default GamePiece;