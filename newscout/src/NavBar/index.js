import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';

export class NavBar extends React.Component {
	render(){
		return(
			<Navbar>
        		<NavbarBrand href="/">
        			<img src={process.env.PUBLIC_URL + "/logo.jpg"} />
        		</NavbarBrand>
          		<Nav className="ml-auto" navbar>
            		<NavItem>Components {process.env.PUBLIC_URL}</NavItem>
            	</Nav>
            </Navbar>
		)
	}
}