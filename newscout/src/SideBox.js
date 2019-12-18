import React from 'react';
import { Media } from 'reactstrap';

export class SideBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		var post = this.props.posts.map((item, index) => {
			return (
				<Media key={index}>
					<Media left href={`/news/article/${item.id}/`} className="mr-3">
						<Media object src={item.src} alt={item.alttext} />
					</Media>
					<Media body>
						<Media heading>
							<a href={`/news/article/${item.id}/`}>{item.header}</a>
						</Media>
					</Media>
				</Media>
			);
		});

		return(
			<div className="sidebox">{post}</div>
		)
	}
}