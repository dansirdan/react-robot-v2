import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
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
    topTen: [],
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
        console.log(res.data)

        res.data.forEach(score => {
          allScores.push(score);
        });

        this.setState({
          topTen: allScores
        })

        console.log(this.state.topTen)
      })
      .catch(err => console.log(err))
  }

  render() {

    let count = 0;

    return (
      <Container>
        <Jumbotron>
          <Row className='justify-content-center text-center'>
            <h1>Leader Board</h1>
          </Row>
          <Row className='justify-content-center text-center'>
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
                  this.state.topTen.length > 0 ?
                    (this.state.topTen.map(data => {
                      return (
                        <tr>
                          <td>{count += 1}</td>
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