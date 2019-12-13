import React from 'react';
import { Media } from 'reactstrap';

export class JumboBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
		};
	}

	render(){

		var first_posts = this.props.posts[0];
		var other_posts = this.props.posts.map((item, index) => {
			return (
				<div className="col-lg-6 col-12 mb-4" key={index}>
					<div className="item">
						<div className="item-image">
							<a href={item.url}>
								<img src={item.src} alt={item.alttext} className="img-fluid" />
							</a>
						</div>
						<div className="item-caption">
							<h3><a href={item.url}>{item.header}</a></h3>
							<p>{item.caption}</p>
						</div>
					</div>
				</div>
			)
		})
		
		return(
			<React.Fragment>
				<div className="row">{other_posts}</div>
			</React.Fragment>
		)
	}
}