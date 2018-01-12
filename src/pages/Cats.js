import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap'

class Cats extends Component {

  // componentWillMount(){
  //     this.setState({profiles: Profiles})
  //   }

  render() {

    // let list = this.state.cats.map(function(profile){
    //       return(
    //         <li key={profile.id}>
    //           <Link to={`/profiles/${profile.id}`} >
    //             {profile.name}
    //           </Link>
    //         </li>
    //       )
    //     })

    return (
      <Row>
        <Col xs={12}>
        <Link to='/' id='cats-link'>Add a Cat</Link>
          <ListGroup>
            {this.props.cats.map((cat, index) =>{
              return (
                <ListGroupItem
                  key={index}
                  header={
                    <h4>
                      <span className='cat-name'>
                        <Link to='/profile' id=''>{cat.name}</Link>
                      </span>
                    - <small className='cat-age'>{cat.age} years old</small>
                    </h4>
                  }>
                  <span className='cat-city'>
                    {cat.city}
                  </span>
                  <br/>
                  <span className='cat-bio'>
                    {cat.bio}
                  </span>

                </ListGroupItem>
              )
            })}
          </ListGroup>
        </Col>
      </Row>
    );
  }
}
export default Cats
