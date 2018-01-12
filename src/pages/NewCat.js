import React, { Component } from 'react';
import {
  Button,
  Col,
  ControlLabel,
  FormGroup,
  FormControl,
  Row,
  Alert,
  HelpBlock
} from 'react-bootstrap'

class NewCat extends Component {
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: '',
        age: '',
        city: '',
        bio: ''
      }
    }
  }
  handleChange(event){
    const formState = Object.assign({}, this.state.form)
    formState[event.target.name] = event.target.value
    this.setState({form: formState})
  }

  handleSubmit(){
    this.props.onSubmit(this.state.form)
  }

  errorsFor(attribute){
    var errorString = ""
    if(this.props.errors){
      const errors = this.props.errors.filter(error => error.param === attribute )
      if(errors){
        errorString = errors.map(error => error.msg ).join(", ")
      }
    }
    return errorString === "" ? null : errorString
  }


  render() {
    return (
      <form>
        <Row>
          <Col xs={6}>
            {this.props.errors &&
              <Alert bsStyle="danger">
                Please check the form and try again
              </Alert>
            }
          </Col>
      </Row>

        <Row>
          <Col xs={6}>
            <FormGroup id="name-form-group"
              validationState={this.errorsFor('name') && 'error'}>
              <ControlLabel id="name">Name</ControlLabel>
              <FormControl
                type="text"
                name="name"
                value={this.state.form.name}
                onChange={this.handleChange.bind(this)}
              /> {this.errorsFor('name') &&
              <HelpBlock id="name-help-block">{this.errorsFor('name')}</HelpBlock>
            }
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup id="age-form-group"
              validationState={this.errorsFor('age') && 'error'}>
              <ControlLabel id="age">Age</ControlLabel>
              <FormControl
                type="number"
                name="age"
                value={this.state.form.age}
                onChange={this.handleChange.bind(this)}
              />  {this.errorsFor('age') &&
              <HelpBlock id="age-help-block">{this.errorsFor('age')}</HelpBlock>
            }
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup id="city-form-group"
              validationState={this.errorsFor('city') && 'error'}>
              <ControlLabel id="city">City</ControlLabel>
              <FormControl
                type="text"
                name="city"
                value={this.state.form.city}
                onChange={this.handleChange.bind(this)}
              />  {this.errorsFor('city') &&
              <HelpBlock id="city-help-block">{this.errorsFor('city')}</HelpBlock>
            }
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <FormGroup id="bio-form-group"
              validationState={this.errorsFor('bio') && 'error'}>
              <ControlLabel id="bio">Bio</ControlLabel>
              <FormControl
                type="textarea"
                name="bio"
                value={this.state.form.bio}
                onChange={this.handleChange.bind(this)}
              /> {this.errorsFor('bio') &&
              <HelpBlock id="bio-help-block">{this.errorsFor('bio')}</HelpBlock>
            }
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
          <Button
            id="submit"
            onClick={this.handleSubmit.bind(this)}
            >Create Cat Profile</Button>

          </Col>
        </Row>

      </form>
    );
  }
}


export default NewCat
