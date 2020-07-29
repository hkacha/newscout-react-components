import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const icon_name = '-white.'

export class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isChecked: this.props.isChecked,
			isSideOpen: this.props.isSideOpen,
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			isChecked: newProps.isChecked,
			isSideOpen: newProps.isSideOpen
		})
	}


	render() {
		var {active_page} = this.props;
		var listitem = this.props.menuitems.map((item, index) => {
			var icon_path = ""
			if (this.state.isChecked === true || this.props.active === item.itemurl.replace("news/", "").trim()) {
				icon_path = item.item_icon.split(".")[0] + icon_name + item.item_icon.split(".")[1]
			} else if (item.itemurl.startsWith("dashboard") && active_page === item.itemurl){
				icon_path = item.item_icon.split(".")[0] + icon_name + item.item_icon.split(".")[1]
			} else {
				icon_path = item.item_icon
			}
			if(active_page !== "" && active_page !== undefined){
				return (
					<ListGroupItem className={`${active_page === item.itemurl ? 'active-menu' : ''} ${this.props.class ? '' : 'text-center'}`} tag="a" href={"/"+item.itemurl+"/"} key={index}>
						<img src={`/${icon_path}`} alt={item.itemtext} className="menu-icons clrwhite" title={item.itemtext} />&nbsp;
						<span className={`${this.props.class ? '' : 'd-none'}`}>{item.itemtext}</span>
					</ListGroupItem>
				)
			} else {
				return (
					<ListGroupItem className={`${this.props.active === item.itemurl.replace("news/", "").trim() ? 'active-menu' : ''} ${this.props.class ? '' : 'text-center'}`} tag="a" href={"/"+item.itemurl+"/"} key={index}>
						<img src={`/${icon_path}`} alt={item.itemtext} className="menu-icons" title={item.itemtext} />&nbsp;
						<span className={`${this.props.class ? '' : 'd-none'}`}>{item.itemtext}</span>
					</ListGroupItem>
				)
			}
		})
		return (
			<div className={`sidebar col-lg-2 d-none d-md-block d-xl-block ${this.props.class ? '' : 'sidebar-none'}`}>
				<ListGroup>
					{this.props.domain === "domain=newscout" || this.props.domain === undefined ?
						<ListGroupItem className={`${this.props.active === "trending" ? 'active-menu' : ''} ${this.props.class ? '' : 'text-center'}`} tag="a" href="/news/trending/">
							<img src={`${this.state.isChecked || this.props.active === "trending" ? "/static/icons/trending-white.png" : "/static/icons/trending.png"}`} alt="Trending" className="menu-icons clrwhite" title="Trending" />&nbsp;
							<span className={`${this.props.class ? '' : 'd-none'}`}>Trending</span>
						</ListGroupItem>
						: ""
					}
					{listitem}
					{this.props.domain === "domain=newscout" || this.props.domain === undefined ?
						<ListGroupItem className={` ${this.props.active === "rss" ? 'active-menu' : ''} ${this.props.class ? '' : 'text-center'} `} tag="a" href="/news/rss/?domain=newscout">
							<img src={`${this.state.isChecked || this.props.active === "rss" ? "/static/icons/rss-white.png" : "/static/icons/rss.png"}`} alt="rss" className="menu-icons" title="RSS" />&nbsp;
							<span className={`${this.props.class ? '' : 'd-none'}`}>RSS</span>
						</ListGroupItem>
						: ""
					}
				</ListGroup>
			</div>
		)
	}
}
