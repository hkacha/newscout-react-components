import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export class Menu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false
		};
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	navitem = this.props.navitems.map((item, index) => {
		return (
			<NavItem>
				<NavLink href={item.itemurl}>{item.itemtext}</NavLink>
			</NavItem>
		)
	})

	render(){
		return(
			<Navbar className="fixed-top" expand="md">
				<NavbarBrand href="/news/">
					<img src={this.props.logo} alt="newscout" />
				</NavbarBrand>
				<NavbarToggler onClick={this.toggle} className="custom-toggler" />
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav className="ml-auto" navbar>
						{this.navitem}
					</Nav>
				</Collapse>
			</Navbar>
		)
	}
}