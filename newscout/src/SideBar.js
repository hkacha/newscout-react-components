import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export class SideBar extends React.Component {
	constructor(props) {
		super(props);
	}


	render(){
		var listitem = this.props.menuitems.map((item, index) => {
			return (
				<ListGroupItem tag="a" href={"/news/"+item.itemurl+"/"} key={index}>{item.itemtext}</ListGroupItem>
			)
		})
		
		return(
			<div className={`sidebar col-lg-2 d-none d-sm-block ${this.props.class ? '' : 'sidebar-none'}`}>
				<ListGroup>
					<ListGroupItem tag="a" href="/news/trending/">Trending</ListGroupItem>
					<ListGroupItem tag="a" href="/news/latest-news/">Latest News</ListGroupItem>
					{listitem}
				</ListGroup>
			</div>
		)
	}
}