import React from 'react';
import Cookies from 'universal-cookie';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupAddon, InputGroupText, Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

import { Search } from 'newscout';

const cookies = new Cookies();

export class Menu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			isSearchOpen: false,
			isSlider: this.props.isSlider,
			isSideOpen: true,
			value: '',
			isChecked: this.props.isChecked,
			tooltipOpen: false
		};
	}

	toggleSwitch = () => {
		this.setState({
			isChecked: !this.state.isChecked
		}, function() {
			this.props.toggleSwitch(this.state.isChecked)
		});
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	toggleLogin = () => {
		this.props.toggle(this.props.is_open)
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

	tooltipToggle = () => {
		this.setState({
			tooltipOpen: !this.state.tooltipOpen
		})
	}

	keyPress = (e) => {
		var url = this.props.url+"?q="+this.state.value;
		if(e.keyCode == 13){
			window.location.href = url;
		}
	}

	handleChange = (e) => {
		this.setState({
			value: e.target.value
		});
	}

	handleLogout = () => {
		this.props.handleLogout()
	}

	componentWillReceiveProps(newProps){
		this.setState({
			isChecked: newProps.isChecked
    	})
    }

	render(){

		const { multiple, placeholder, options, url, isSlider, domain, navitems, logo, username, is_loggedin } = this.props;

		if(this.state.isSearchOpen === true){
			document.getElementsByTagName("body")[0].style = "overflow:hidden";
		} else {
			document.getElementsByTagName("body")[0].style = "overflow:auto";
		}

		const menu = navitems.map((item, index) => {
			var menuitem = item.itemtext.replace(/ /g, "-").toLowerCase()
			return (
				<NavItem key={index} className="d-block d-md-none">
					<NavLink href={`${domain !== 'dashboard' ? '/news/' : '/'}${menuitem}/`}>
						<img src={`${item.item_icon}`} alt={item.itemtext} className="menu-icons"/>&nbsp;
						{item.itemtext}
					</NavLink>
				</NavItem>
			)
		})

		return(
			<React.Fragment>
				<Navbar className="fixed-top" expand="md">
					{isSlider ?
						<React.Fragment>
							<div className="sidebar-btn d-none d-sm-block pl-1" onClick={this.sidebartoggle}><FontAwesomeIcon icon={faBars} size="lg" /></div>
						</React.Fragment>
					: ""
					}
					<NavbarBrand href={` ${domain === "dashboard" ? "/dashboard/" : "/"} `} className="ml-4">
						<img src={logo} alt="newscout" />
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} className="custom-toggler" />
					<Collapse isOpen={this.state.isOpen} navbar>
						<div className="m-auto col-lg-6">
							<Nav className="ml-auto" navbar id="menu">
								<InputGroup className={`search-box ${domain === "dashboard" ? 'd-none' : ''} `}>
									<input type="text" className="form-control" onChange={this.handleChange} onKeyDown={this.keyPress} placeholder="Search" value={this.state.value} />
									<InputGroupAddon addonType="append">
										<InputGroupText><FontAwesomeIcon icon={faSearch} /></InputGroupText>
									</InputGroupAddon>
								</InputGroup>

								{domain === "domain=newscout" || domain === undefined ?
									<React.Fragment>
										<NavItem className="d-block d-md-none">
											<NavLink href="/news/trending/">
											<img src="/static/icons/trending_news.png" alt="Trending" className="menu-icons"/>&nbsp;
											Trending
											</NavLink>
										</NavItem>
									</React.Fragment>
								: ""
								}
								{menu}
							</Nav>
						</div>
						{domain === "domain=newscout" || domain === undefined ?
							<Nav className="ml-auto" navbar>
								<NavItem>
									<label className="switch" id="TooltipExample">
										<input type="checkbox" onClick={this.toggleSwitch} checked={this.state.isChecked} />
										<span className="slider round"></span>
									</label>
									<Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.tooltipToggle}>
										{this.state.isChecked ? 'Switch to day mode' : 'Switch to night mode'}
									</Tooltip>
								</NavItem>
								{is_loggedin ?
									<UncontrolledDropdown nav inNavbar>
										<DropdownToggle nav caret className="login">
											{username}
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem className="login" href="/news/bookmark/">
												My Bookmarks
											</DropdownItem>
											<DropdownItem divider />
											<DropdownItem onClick={this.handleLogout} className="login">Logout</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
								:
									<React.Fragment>
										<NavItem>
											<NavLink onClick={this.toggleLogin} className="login">Login</NavLink>
										</NavItem>
									</React.Fragment>
								}
							</Nav>
						: ""
						}
					</Collapse>
				</Navbar>
				<Search
					toggleSearch={this.toggleSearch}
					isSearchOpen={this.state.isSearchOpen}
					multiple={multiple}
					placeholder={placeholder}
					options={options}
					url={url}
				/>
			</React.Fragment>
		)
	}
}