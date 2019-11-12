import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

function NavBar() {
	return(
		<Navbar>
    		<NavbarBrand href="/">reactstrap</NavbarBrand>
      		<Nav className="ml-auto" navbar>
        		<NavItem>Components</NavItem>
        	</Nav>
        </Navbar>
	)
}