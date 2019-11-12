import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export default class CardItem extends React.Component {
	render(){
		const {image, title, description, uploaded_on, uploaded_by} = this.props;
		return(
			<Card>
				<CardImg top width="100%" src={image} alt={title} />
				<CardBody>
					<CardText>
						<small className="text-muted">{uploaded_on}</small>
					</CardText>
					<CardTitle>{title}</CardTitle>
					<CardText>{description}</CardText>
				</CardBody>
			</Card>
		)
	}
}