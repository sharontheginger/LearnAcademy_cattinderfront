import React, {Component} from "react"
import {Jumbotron, Button} from "react-bootstrap"
import {Link} from 'react-router-dom'
import Kali from '../images/Kali.jpg'

class Header extends Component {
  render() {
    return (
      <Jumbotron>
		<h1><Link to='/'>Cat Connection</Link></h1>
    <img id='kali' src={Kali}/>
    <p>
			All the cats, all the time.
		</p>
		<p>
			<Button bsStyle="danger" href='https://en.wikipedia.org/wiki/Cat' target='_blank'>Learn more</Button>
		</p>
	</Jumbotron>


);
}
}
export default Header
