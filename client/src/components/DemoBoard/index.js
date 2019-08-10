import React, { Component } from "react";
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
        <div className="game-screen row">
          <div className="col-6" id="demoPiece">
            <div className="card">
              <img className="card-img rounded" id="demo1" src="https://www.bhphotovideo.com/images/images500x500/Rosco_RS2611_26_Filter_Light_43957.jpg" alt="red"
                style={{
                  opacity: this.state.demo1 ? 1 : 0.7,
                  border: this.state.demo1 ? '2px solid #8bcdd8' : '2px solid black',
                  boxShadow: this.state.demo1 ? '1px 1px 2px black, 0 0 1em #8bcdd8, 0 0 0.2em #8bcdd8' : 'none'
                }}
              />
            </div>
          </div>
          <div className="col-6" id="demoPiece">
            <div className="card">
              <img className="card-img rounded" id="demo2" src="https://pe-images.s3.amazonaws.com/basics/shapes/blue-square.gif" alt="blue"
                style={{
                  opacity: this.state.demo2 ? 1 : 0.7,
                  border: this.state.demo2 ? '2px solid #8bcdd8' : '2px solid black',
                  boxShadow: this.state.demo2 ? '1px 1px 2px black, 0 0 1em #8bcdd8, 0 0 0.2em #8bcdd8' : 'none'
                }}
              />
            </div>
          </div>
        </div>
        <div className="game-screen row">
          <div className="col-6" id="demoPiece">
            <div className="card">
              <img className="card-img rounded" id="demo3" src="https://www.americasfinestlabels.com/includes/work/image_cache/a4cb211cac7697694b91b494f3620ca4.thumb.jpg" alt="green"
                style={{
                  opacity: this.state.demo3 ? 1 : 0.7,
                  border: this.state.demo3 ? '2px solid #8bcdd8' : '2px solid black',
                  boxShadow: this.state.demo3 ? '1px 1px 2px black, 0 0 1em #8bcdd8, 0 0 0.2em #8bcdd8' : 'none'
                }}
              />
            </div>
          </div>
          <div className="col-6" id="demoPiece">
            <div className="card">
              <img className="card-img rounded" id="demo4" src="http://www.esotericmeanings.com/wp-content/uploads/2016/07/meditation_visualisation_yellow_square-256.jpg" alt="yellow"
                style={{
                  opacity: this.state.demo4 ? 1 : 0.7,
                  border: this.state.demo4 ? '2px solid #8bcdd8' : '2px solid black',
                  boxShadow: this.state.demo4 ? '1px 1px 2px black, 0 0 1em #8bcdd8, 0 0 0.2em #8bcdd8' : 'none'
                }}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
};

export default DemoBoard;
