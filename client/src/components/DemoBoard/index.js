import React, { Component } from "react";
import {
  Row,
  Col
} from 'react-bootstrap';
import "./style.css";

class DemoBoard extends Component {

  state = {
    demo1: false,
    demo2: false,
    demo3: false,
    demo4: false
  }

  runComplete = () => {
    this.props.changeTurn("user")
  }

  cssTressSwitch = (element, interval) => {
    switch (element) {
      case 1:
        setTimeout(
          function () {
            this.setState({ demo1: true })
          }.bind(this), interval);
        setTimeout(
          function () {
            this.setState({ demo1: false })
          }.bind(this), interval + 700);
        break;
      case 2:
        setTimeout(
          function () {
            this.setState({ demo2: true })
          }.bind(this), interval);
        setTimeout(
          function () {
            this.setState({ demo2: false })
          }.bind(this), interval + 700);
        break;
      case 3:
        setTimeout(
          function () {
            this.setState({ demo3: true })
          }.bind(this), interval);
        setTimeout(
          function () {
            this.setState({ demo3: false })
          }.bind(this), interval + 700);
        break;
      case 4:
        setTimeout(
          function () {
            this.setState({ demo4: true })
          }.bind(this), interval);
        setTimeout(
          function () {
            this.setState({ demo4: false })
          }.bind(this), interval + 700);
        break;
      default:
        break;
    }
  }

  componentDidMount = () => {

    let interval = 0;
    let counter = 0;

    for (let i = 0; i < this.props.gameArray.length; i++) {
      let element = this.props.gameArray[i];
      interval += 1000;
      counter = counter + 1;
      this.cssTressSwitch(element, interval)
    }

    setTimeout(
      function () {
        this.runComplete()
      }.bind(this), 1000 * counter + 1000);
  }

  render() {
    return (
      <>
        <div className="game-screen">
          <Row>
            <Col lg='6' md='6' sm='6' className='square' id='demoPiece'>
              <div className="rounded-demo"
                id="demo1"
                style={{
                  opacity: this.state.demo1 ? 1 : 0.7,
                  border: this.state.demo1 ? '2px solid #8bcdd8' : '2px solid black',
                  boxShadow: this.state.demo1 ? '1px 1px 2px black, 0 0 1em #8bcdd8, 0 0 0.2em #8bcdd8' : 'none'
                }}
              />
            </Col>
            <Col lg='6' md='6' sm='6' className='square' id='demoPiece'>
              <div className="rounded-demo"
                id="demo2"
                style={{
                  opacity: this.state.demo2 ? 1 : 0.7,
                  border: this.state.demo2 ? '2px solid #8bcdd8' : '2px solid black',
                  boxShadow: this.state.demo2 ? '1px 1px 2px black, 0 0 1em #8bcdd8, 0 0 0.2em #8bcdd8' : 'none'
                }}
              />
            </Col>
          </Row>
          <Row>
            <Col lg='6' md='6' sm='6' className='square' id='demoPiece'>
              <div className="rounded-demo"
                id="demo3"
                style={{
                  opacity: this.state.demo3 ? 1 : 0.7,
                  border: this.state.demo3 ? '2px solid #8bcdd8' : '2px solid black',
                  boxShadow: this.state.demo3 ? '1px 1px 2px black, 0 0 1em #8bcdd8, 0 0 0.2em #8bcdd8' : 'none'
                }}
              />
            </Col>
            <Col lg='6' md='6' sm='6' className='square' id='demoPiece'>
              <div className="rounded-demo"
                id="demo4"
                style={{
                  opacity: this.state.demo4 ? 1 : 0.7,
                  border: this.state.demo4 ? '2px solid #8bcdd8' : '2px solid black',
                  boxShadow: this.state.demo4 ? '1px 1px 2px black, 0 0 1em #8bcdd8, 0 0 0.2em #8bcdd8' : 'none'
                }}
              />
            </Col>
          </Row>
        </div>
      </>
    )
  }
};

export default DemoBoard;
