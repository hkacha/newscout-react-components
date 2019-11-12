import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export default class CardItem extends React.Component {
	render(){
		const {image, title, description, uploaded_on, uploaded_by} = this.props;
		return(
			<Card>
				<CardImg top width="100%" src={image} alt={title} />
				<CardBody>
					<CardTitle className="card-title">{title}</CardTitle>
					<CardText>
						<small className="text-muted card-muted">{uploaded_on}</small>
					</CardText>
					<CardText className="card-desc">{description}</CardText>
				</CardBody>
			</Card>
		)
	}
}