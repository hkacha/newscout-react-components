import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export class SideBar extends React.Component {
	constructor(props) {
		super(props);
	}


	render(){
		var { menuitems, domain } = this.props;

		var listitem = menuitems.map((item, index) => {
			return (
				<ListGroupItem tag="a" href={"/"+item.itemurl+"/"} key={index}>
					<img src={`${domain === "dashboard" ? '/' : '' }${item.item_icon}`} alt={item.itemtext} className="menu-icons"/>&nbsp;
					{item.itemtext}
				</ListGroupItem>
			)
		})
		
		return(
			<div className={`sidebar col-lg-2 d-none d-md-block d-xl-block ${this.props.class ? '' : 'sidebar-none'}`}>
				<ListGroup>
					{domain === "domain=newscout" || domain === undefined ?
						<ListGroupItem tag="a" href="/news/trending/">
							<img src="/static/icons/trending_news.png" alt="Trending" className="menu-icons"/>&nbsp;
							Trending
						</ListGroupItem>
					: ""
					}
					{listitem}
				</ListGroup>
			</div>
		)
	}
}