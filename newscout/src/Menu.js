import React from 'react';
import Cookies from 'universal-cookie';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupAddon, InputGroupText, Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faSignInAlt, faPowerOff, faBookmark, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import {Typeahead} from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import { Search } from 'newscout';

const cookies = new Cookies();
const icon_name = '-white.'
var options = ['China', 'Corona', 'India', 'Italy', 'US', 'Lock Down', 'Money', 'Stock', 'Trump', 'Delhi', 'PM', 'Police', 'Spain', 'Tata', 'Reliance', 'Ambani', 'hospital', 'Virus', 'Finance', 'GDP'];

export class Menu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			isSearchOpen: false,
			isSlider: this.props.isSlider,
			isSideOpen: this.props.isSideOpen,
			text: '',
			isChecked: this.props.isChecked,
			tooltipOpen: false,
			selected: []
		};

		this.myRef = React.createRef();
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

	isSideBarToogle = () => {
		this.setState({
			isSideOpen: !this.state.isSideOpen
		}, function() {
			this.props.isSideBarToogle(this.state.isSideOpen)
		})
	}

	tooltipToggle = () => {
		this.setState({
			tooltipOpen: !this.state.tooltipOpen
		})
	}

	handleKeyPress = (e) => {
		var value = e.target.value;
		var url = this.props.url+"?q="+value;
		if(e.keyCode == 13){
			window.location.href = url;
		}
	}

	handleAutoFocus = () => {
		this.typeahead.getInstance().focus()
		// const instance = this.myRef.current.getInstance()
		// instance.clear();
		// instance.focus();
		// console.log(instance.state.text)
		// var aa = document.getElementById("search-text")
		// console.log(aa.value)
	}

	handleChange = (e) => {
		const value = e.target.value;
		this.setState({ text: value})
	}

	handleLogout = () => {
		this.props.handleLogout()
	}

	componentWillReceiveProps(newProps){
		this.setState({
			isChecked: newProps.isChecked,
			isSideOpen: newProps.isSideOpen
    	})
    }

	render(){
		const { multiple, placeholder, url, isSlider, domain, navitems, logo, username, is_loggedin } = this.props;

		if(this.state.isSearchOpen === true){
			document.getElementsByTagName("body")[0].style = "overflow:hidden";
		} else {
			document.getElementsByTagName("body")[0].style = "overflow:auto";
		}

		const menu = navitems.map((item, index) => {
			var menuitem = item.itemtext.replace(/ /g, "-").toLowerCase()
			var icon_path = ""
			if(this.state.isChecked === true){
				icon_path = item.item_icon.split(".")[0]+icon_name+item.item_icon.split(".")[1]
			} else {
				icon_path = item.item_icon
			}
			return (
				<NavItem key={index} className="d-block d-md-none">
					<NavLink href={`${domain !== 'dashboard' ? '/news/' : '/'}${menuitem}/`}>
						<img src={`${icon_path}`} alt={item.itemtext} className="menu-icons"/>&nbsp;
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
							<div className="sidebar-btn d-none d-sm-block pl-1" onClick={this.isSideBarToogle}><FontAwesomeIcon icon={faBars} size="lg" /></div>
						</React.Fragment>
					: ""
					}
					<NavbarBrand href={` ${domain === "dashboard" ? "/dashboard/" : "/"} `} className="ml-4">
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} className="custom-toggler" />
					<Collapse isOpen={this.state.isOpen} navbar>
						<div className="m-auto col-lg-6">
							<Nav className="ml-auto" navbar id="menu">
								<InputGroup className={`search-box ${domain === "dashboard" ? 'd-none' : ''} `}>
									<Typeahead
										options={options}
										selected={this.state.selected}
										onBlur={this.handleChange}
										placeholder="Search.."
										inputProps={{id:"search-text"}}
										ref={(typeahead) => this.typeahead = typeahead}
									/>
								</InputGroup>
								{domain === "domain=newscout" || domain === undefined ?
									<React.Fragment>
										<NavItem className="d-block d-md-none">
											<NavLink href="/news/trending/">
											<img src={`${this.state.isChecked ? "/static/icons/trending_news-white.png" : "/static/icons/trending_news.png" }`} alt="Trending" className="menu-icons"/>&nbsp;
											Trending
											</NavLink>
										</NavItem>
									</React.Fragment>
								: ""
								}
								{menu}
								{domain === "domain=newscout" || domain === undefined ?
									<NavItem className="d-block d-md-none">
										<NavLink href="/news/rss/?domain=newscout">
											<img src={`${this.state.isChecked ? "/static/icons/rss-white.png" : "/static/icons/rss.png" }`} alt="rss" className="menu-icons"/>&nbsp;
											RSS
										</NavLink>
									</NavItem>
								: ""
								}
							</Nav>
						</div>
						{domain === "domain=newscout" || domain === undefined ?
							<Nav className="ml-auto" navbar>
								<NavItem>
									{this.state.isChecked ?
										<FontAwesomeIcon icon={faMoon} style={{fontSize:'16px', verticalAlign:'text-top'}}/>
									:
										<FontAwesomeIcon icon={faSun} style={{fontSize:'16px', verticalAlign:'text-top'}}/>
									}
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
												<FontAwesomeIcon icon={faBookmark} /> My Bookmarks
											</DropdownItem>
											<DropdownItem divider />
											<DropdownItem onClick={this.handleLogout} className="login"> <FontAwesomeIcon icon={faPowerOff} /> Logout</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
								:
									<React.Fragment>
										<NavItem>
											<NavLink onClick={this.toggleLogin} className="login"><FontAwesomeIcon icon={faSignInAlt} /> Login</NavLink>
										</NavItem>
									</React.Fragment>
								}
							</Nav>
						: ""
						}
					</Collapse>
				</Navbar>
				<KeyboardEventHandler handleKeys={['shift+/']} onKeyEvent={this.handleAutoFocus} handleFocusableElements={true} />
			</React.Fragment>
		)
	}
}