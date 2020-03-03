import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export class SideBar extends React.Component {
	constructor(props) {
		super(props);
	}


	render(){
		var listitem = this.props.menuitems.map((item, index) => {
			return (
				<ListGroupItem tag="a" href={"/news/"+item.itemurl+"/"} key={index}>
					<img src={`/${item.item_icon}`} alt={item.itemtext} className="menu-icons"/>&nbsp;
					{item.itemtext}
				</ListGroupItem>
			)
		})
		
		return(
			<div className={`sidebar col-lg-2 d-none d-sm-block ${this.props.class ? '' : 'sidebar-none'}`}>
				<ListGroup>
					{listitem}
				</ListGroup>
			</div>
		)
	}
}