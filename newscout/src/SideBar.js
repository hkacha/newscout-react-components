import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export class SideBar extends React.Component {
	constructor(props) {
		super(props);
	}

	listitem = this.props.menuitems.map((item, index) => {
		return (
			<ListGroupItem tag="a" href={item.itemurl} key={index}>{item.itemtext}</ListGroupItem>
		)
	})

	render(){
		return(
			<div className="sidebar col-lg-2 d-none d-sm-block">
				<ListGroup>
					{this.listitem}
				</ListGroup>
			</div>
		)
	}
}