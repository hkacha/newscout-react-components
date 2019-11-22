import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

export class SideBox extends React.Component {
	constructor(props) {
		super(props);
	}

	post = this.props.posts.map((item, index) => {
		return (
			<li key={index}>
				<h5 className="post-header">
					<a href={item.url} className="post-url">{item.header}</a>
				</h5>
				<p className="post-caption">{item.caption}</p>
			</li>
		);
	});

	render(){
		return(
			<div className="sidebox">
				<div className="boxtitle mb-4">
					<h4 className="m-0">{this.props.boxtitle}</h4>
				</div>
				<ul className="list-unstyled">
					{this.post}
				</ul>
			</div>
		)
	}
}