import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export class CardItem extends React.Component {
	render(){
		const {image, title, description, uploaded_on, uploaded_by, posturl} = this.props;
		return(
			<Card>
				<a href={posturl}>
					<CardImg top width="100%" src={image} alt={title} />
				</a>
				<CardBody>
					<CardTitle className="card-title">
						<a href={posturl}>{title}</a>
					</CardTitle>
					<CardText>
						<small className="text-muted card-muted">{uploaded_on} via {uploaded_by}</small>
					</CardText>
					<CardText className="card-desc">{description}</CardText>
				</CardBody>
			</Card>
		)
	}
}
