import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

import { Search } from 'newscout';

export class Menu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			isSearchOpen: false,
			isSlider: this.props.isSlider,
			isSideOpen: true
		};
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	sidebartoggle = () => {
		this.setState({
			isSideOpen: !this.state.isSideOpen
		}, function() {
			this.props.isSideOpen(this.state.isSideOpen)
		})
	}

	toggleSearch = () => {
		this.setState({
			isSearchOpen: !this.state.isSearchOpen
		})
	}

	render(){
		
		const { multiple, placeholder, options, url, isSlider, domain, navitems, logo } = this.props;

		if(this.state.isSearchOpen === true){
			document.getElementsByTagName("body")[0].style = "overflow:hidden";
		} else {
			document.getElementsByTagName("body")[0].style = "overflow:auto";
		}

		const menu = navitems.map((item, index) => {
			var menuitem = item.itemtext.replace(/ /g, "-").toLowerCase()
			return (
				<NavItem key={index}  className="d-none">
					<NavLink href={`/news/${menuitem}`}>
						<img src={`/${item.item_icon}`} alt={item.itemtext} className="menu-icons"/>&nbsp;
						{item.itemtext}
					</NavLink>
				</NavItem>
			)
		})

		return(
			<React.Fragment>
				<Navbar className="fixed-top" expand="md">
					<div className="col-lg-2 col-6">
						<NavbarBrand href="/">
							<img src={logo} alt="newscout" />
						</NavbarBrand>
					</div>
					<Nav className="ml-auto d-block d-sm-none" navbar>
						<NavItem>
							<NavLink onClick={this.toggleSearch}><FontAwesomeIcon icon={faSearch} /></NavLink>
						</NavItem>
					</Nav>
					<NavbarToggler onClick={this.toggle} className="custom-toggler" />
					<Collapse isOpen={this.state.isOpen} navbar>
						{isSlider ?
							<React.Fragment>
								<div className="sidebar-btn" onClick={this.sidebartoggle}><FontAwesomeIcon icon={faBars} size="lg" /></div>
							</React.Fragment>
						: ""
						}
						<Nav className="ml-auto" navbar id="menu">
							{domain === "domain=newscout" || domain === undefined ?
								<React.Fragment>
									<NavItem className="d-none">
										<NavLink href="/news/trending/">
										<img src="/static/icons/trending_news.png" alt="Trending" className="menu-icons"/>&nbsp;
										Trending
										</NavLink>
									</NavItem>
								</React.Fragment>
							: ""
							}
							{menu}
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