import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export class VerticleCardItem extends React.Component {
	render(){
		const {image, title, description, uploaded_on, uploaded_by, slug_url, source_url, category, hash_tags} = this.props;
		return(
			<Card className="card-post">
				<a href={`${slug_url}`}><img src={image} alt={title} className="img-fluid" /></a>
				<div className="section-category">{uploaded_on}</div>
				<CardBody>
					<CardTitle className="mb-2">
						<a href={`${slug_url}`}>{title}</a>
					</CardTitle>
					<CardText>
						<a href={`${source_url}`}>{uploaded_by}</a>
					</CardText>
					<CardText className="card-desc"><a href={`${slug_url}`} target="_blank">{description}</a></CardText>
				</CardBody>
			</Card>
		)
	}
}
