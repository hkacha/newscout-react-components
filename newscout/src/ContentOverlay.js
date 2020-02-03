import React from 'react';

export class ContentOverlay extends React.Component {
	render(){
		const {title, description, uploaded_by, source_url, category, slug_url} = this.props;
		return(
			<article className="featurepost">
				<div className="featurepost-content">
					<ul className="list-inline featurepost-category">
						<li className="list-inline-item">{category}</li>
					</ul>
					<h3><a href={`${slug_url}`}>{title}</a></h3>
					<ul className="list-unstyled featurepost-source">
						<li className="list-item"><a href={`${source_url}`}>{uploaded_by}</a></li>
					</ul>
					<p>{description}</p>
					<h6><a href={`${slug_url}`}>Read More...</a></h6>
				</div>
			</article>
		)
	}
}
