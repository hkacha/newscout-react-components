import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

class CardItem extends React.Component {
	// const {image_path, card_title, card_text} = this.props;
	render(){
		return(
			<Card>
				<CardImg top width="100%" src="/assets/318x180.svg" alt="card_title" />
				<CardBody>
					<CardText>
						<small className="text-muted">Last updated 3 mins ago</small>
					</CardText>
					<CardTitle>card_title</CardTitle>
					<CardText>card_text</CardText>
				</CardBody>
			</Card>
		)
	}
}


export default CardItem