import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from 'react-bootstrap'

class CatProfile extends Component {

  // constructor(props){
  //     super(props)
  //     this.state = {
  //       cats: Cats
  //     }
  //   }
  //   componentWillMount(){
  //     const id = this.props.match.params.id
  //     this.setState({catProfileId: id})
  //     let profile = this.state.cats.find(function(listing){
  //       return listing.id === parseInt(id)
  //     })
  //     if(profile){
  //       this.setState({profile: profile})
  //     }
  //   }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <ListGroup>

              <ListGroupItem

                header={
                  <h4>
                    <span className='cat-name'>
                      <Link to='/profile' id=''>{this.props.profile.name}</Link>
                    </span>
                  - <small className='cat-age'>{this.props.profile.age} years old</small>
                  </h4>
                }>
                <span className='cat-city'>
                  {this.props.profile.city}
                </span>
                <br/>
                <span className='cat-bio'>
                  {this.props.profile.bio}
                </span>

              </ListGroupItem>
        </ListGroup>
      </Col>
    </Row>
  );
}
}export default CatProfile
