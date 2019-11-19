import React from 'react';
import { Nav, NavItem } from 'reactstrap';

export class Menu extends React.Component {
	render(){
		return(
			<Nav className="ml-auto" navbar>
                <NavItem className="menu">+</NavItem>
            </Nav>
		)
	}
}