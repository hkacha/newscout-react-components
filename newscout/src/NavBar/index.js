import React from 'react';
import '../src/NavBar/index.css';
import { Nav, NavItem } from 'reactstrap';

export class NavBar extends React.Component {
	render(){
		return(
			<Nav className="ml-auto" navbar>
                <NavItem className="menu">+</NavItem>
            </Nav>
		)
	}
}