import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export class CardItem extends React.Component {
	render(){
		const {image, title, description, uploaded_on, uploaded_by, posturl} = this.props;
		return(
			<Card>
				<a href={`${posturl}`} target="_blank">
					<CardImg top width="100%" src={image} alt={title} />
				</a>
				<CardBody>
					<CardTitle className="card-title">
						<a href={`${posturl}`} target="_blank">{title}</a>
					</CardTitle>
					<CardText>
						<small className="text-muted card-muted">{uploaded_on} via <a href={`${posturl}`} target="_blank">{uploaded_by}</a></small>
					</CardText>
					<CardText className="card-desc">{description}</CardText>
				</CardBody>
			</Card>
		)
	}
}
