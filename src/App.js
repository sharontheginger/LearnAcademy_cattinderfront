import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {
  Grid,
  PageHeader, Row, Col
} from 'react-bootstrap'
import Cats from './pages/Cats'
import NewCat from './pages/NewCat'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: [
        {
          id: 1,
          name: 'Morris',
          age: 2,
          city: "San Diego",
          bio: "Long walks on the beach."
        },
        {
          id: 2,
          name: 'Paws',
          age: 4,
          city: "San Francisco",
          bio: "Snuggling by the fire."
        },
        {
          id: 3,
          name: 'Mr. Meowsalot',
          age: 12,
          city: "Ashville",
          bio: "Being in charge."
        }
      ]
    }
  }
  newCatSubmit(e){
    console.log(e)
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" render={props => (
            <Grid>
              <PageHeader>
                Cat Connection
                <br/>
                <small className='subtitle'>Add a Cat</small>
                <NewCat onSubmit={this.newCatSubmit.bind(this)}/>
                <br/>
                    <Link to='/cats' id='cats-link'>All the Cats</Link>
              </PageHeader>
            </Grid>
          )} />

          <Route exact path="/cats" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                    Cat Connection
                    <br/>
                    <small className='subtitle'>Add a Cat</small>

                  </Col>
                  <Col xs={4}>
                    <small>

                    </small>
                  </Col>
                </Row>
              </PageHeader>
              <Cats cats={this.state.cats} />
            </Grid>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
