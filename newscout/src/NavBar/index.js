import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

export class NavBar extends React.Component {
	render(){
		return(
			<Navbar>
        		<NavbarBrand href="/">
        			<img src="/logo.jpg" />
        		</NavbarBrand>
          		<Nav className="ml-auto" navbar>
            		<NavItem>Components</NavItem>
            	</Nav>
            </Navbar>
		)
	}
}