import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, } from '@fortawesome/free-solid-svg-icons'

import { Search } from 'newscout';

export class Menu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			isSearchOpen: false
		};
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	toggleSearch = () => {
		this.setState({
			isSearchOpen: !this.state.isSearchOpen
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
		if(this.state.isSearchOpen === true){
			document.getElementsByTagName("body")[0].style = "overflow:hidden";
		} else {
			document.getElementsByTagName("body")[0].style = "overflow:auto";
		}
		return(
			<React.Fragment>
				<Navbar className="fixed-top" expand="md">
					<NavbarBrand href="/news/">
						<img src={this.props.logo} alt="newscout" />
					</NavbarBrand>
					<Nav className="ml-auto d-block d-sm-none" navbar>
						<NavItem>
							<NavLink onClick={this.toggleSearch}><FontAwesomeIcon icon={faSearch} /></NavLink>
						</NavItem>
					</Nav>
					<NavbarToggler onClick={this.toggle} className="custom-toggler" />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							{this.navitem}
							<NavItem>
								<NavLink onClick={this.toggleSearch}><FontAwesomeIcon icon={faSearch} /></NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				<Search toggleSearch={this.toggleSearch} isSearchOpen={this.state.isSearchOpen} />
			</React.Fragment>
		)
	}
}