import React from 'react';
import { Media } from 'reactstrap';

export class SideBox extends React.Component {
	constructor(props) {
		super(props);
	}

	post = this.props.posts.map((item, index) => {
		return (
			<Media key={index}>
				<Media left href={item.url} className="mr-3">
					<Media object src={item.src} alt={item.alttext} />
				</Media>
				<Media body>
					<Media heading>
						<a href={item.url}>{item.header}</a>
					</Media>
				</Media>
			</Media>
		);
	});

	render(){
		return(
			<div className="sidebox">{this.post}</div>
		)
	}
}