import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import {
  Grid,
  PageHeader,
  Row,
  Col,
} from 'react-bootstrap'
import Cats from './pages/Cats'
import CatProfile from './pages/CatProfile'
import NewCat from './pages/NewCat'
import Jumbotron from './components/Jumbotron'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apiUrl: "http://localhost:3000",
      cats: [],
      profile: [],
      newCatSuccess: false,
      errors: null
    }
  }
handleNewCat(params){
    fetch(`${this.state.apiUrl}/cats`,
      {
        body: JSON.stringify(params),  // <- we need to stringify the json for fetch
        headers: {  // <- We specify that we're sending JSON, and expect JSON back
          'Content-Type': 'application/json'
        },
        method: "POST"  // <- Here's our verb, so the correct endpoint is invoked on the server
      }
    )
    .then((rawResponse)=>{
      return rawResponse.json()
    })
    .then((parsedResponse) =>{
      if(parsedResponse.errors){ // <- Check for any server side errors
        this.setState({errors: parsedResponse.errors})
      }else{
        const cats = Object.assign([], this.state.cats)
        cats.push(parsedResponse.cat) // <- Add the new cat to our list of cats
        this.setState({
          cats: cats,  // <- Update cats in state
          errors: null, // <- Clear out any errors if they exist
          newCatSuccess: true
        })
      }
    })
  }
  componentWillMount(){
  fetch(`${this.state.apiUrl}/cats`)
  .then((rawResponse) =>{
    return rawResponse.json()
  })
  .then((parsedResponse)=>{
    this.setState({cats: parsedResponse.cats})
  })
}

  render() {
    return (
      <Router>
        <div>
          <Jumbotron />
          <Route exact path="/" render={props => (
            <Grid>
              <PageHeader>
                <Col xs={8}>
                  <small className='subtitle'>Add a Cat</small>
                </Col>
                
              </PageHeader>
              <NewCat onSubmit={this.handleNewCat.bind(this)}
              errors={this.state.errors && this.state.errors.validations}/>
              <br/>
              {this.state.newCatSuccess &&
                <Redirect to="/cats" />
              }<Link to='/cats' id='cats-link'>Show me the Cats</Link>

            </Grid>
          )} />

          <Route exact path="/cats" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                    <br/>
                    <Col xs={4}>
                    <small>

                 </small>
               </Col>
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

          <Route exact path="/profile" render={props => (
            <Grid>
              <PageHeader>
                <Row>
                  <Col xs={8}>
                    <br/>
                    <Col xs={4}>
                    <small>
                 </small>
               </Col>
                  </Col>
                  <Col xs={4}>
                    <small>
                    </small>
                  </Col>
                </Row>
              </PageHeader>
              <CatProfile profile={this.state.profile} />
            </Grid>
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
