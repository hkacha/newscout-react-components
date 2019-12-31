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

	render(){
		const { multiple, placeholder, options, url } = this.props;

		var navitem = this.props.navitems.map((item, index) => {
			return (
				<React.Fragment key={index}>
					<NavItem>
						<NavLink href={"/news/"+item.itemurl+"/"}>{item.itemtext}</NavLink>
					</NavItem>
				</React.Fragment>
			)
		})

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
							<NavItem>
								<NavLink href="/news/trending/">Trending</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/news/latest-news/">Latest News</NavLink>
							</NavItem>
							{navitem}
							<NavItem>
								<NavLink onClick={this.toggleSearch}><FontAwesomeIcon icon={faSearch} /></NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
				<Search toggleSearch={this.toggleSearch}
						isSearchOpen={this.state.isSearchOpen}
						multiple={multiple}
						placeholder={placeholder}
						options={options}
						url={url} />
			</React.Fragment>
		)
	}
}