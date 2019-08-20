import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Jumbotron,
  ListGroup,
  ListGroupItem,
  Col,
  Row,
  Table
} from 'react-bootstrap';
import API from '../utils/API';

class LeaderBoard extends Component {

  state = {
    topFive: [],
    nullData: {
      name: "n/a",
      score: "n/a",
      level: "n/a"
    }
  }

  componentWillMount = () => {

    let allScores = [];

    API.getScores()
      .then(res => {

        // will only capture 5 thanks to SQL definition
        res.data.forEach(score => {
          allScores.push(score);
        });

        this.setState({
          topFive: allScores
        })

      })
      .catch(err => console.log(err))
  }

  render() {

    let count = 0;

    return (
      <Container>
        <Jumbotron>
          <Row className='justify-content-center text-center'>
            <Col>
              <h1>LEADER BOARD</h1>
              <hr />
            </Col>
          </Row>
          <Row className='justify-content-center text-center'>
            <Col>

              <Table striped bordered hover variant='dark'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Score</th>
                    <th>Level</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.topFive.length > 0 ?
                      (this.state.topFive.map(data => {
                        return (
                          <tr key={count += 1}>
                            <td>{count}</td>
                            <td>{data.name}</td>
                            <td>{data.score}</td>
                            <td>{data.level}</td>
                          </tr>
                        )
                      }))
                      :
                      (
                        <tr>
                          <td>0</td>
                          <td>{this.state.nullData.name}</td>
                          <td>{this.state.nullData.score}</td>
                          <td>{this.state.nullData.level}</td>
                        </tr>
                      )

                  }
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className='justify-content-center text-center'>
            <ListGroup>
              <ListGroupItem as={Link} action variant="default" to="./">
                Home
            </ListGroupItem>
              <ListGroupItem as={Link} action variant="default" to="./play">
                Play Game
            </ListGroupItem>
            </ListGroup>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

export default LeaderBoard;