import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export class JumboBox extends React.Component {
	render(){
		const {source_url, image, title, uploaded_on, uploaded_by, description, hash_tags} = this.props;
		let all_hash_tags = "";
		
		if(hash_tags !== undefined){
			all_hash_tags = hash_tags.map((item, index) => {
				return(
					<li className="list-inline-item">{`#${item}`}</li>
				)
			})
		}
		
		return(
			<Card className="card-post">
				<a href={`${source_url}`} target="_blank"><img src={image} alt={title} className="img-fluid" /></a>
				<div className="section-category">{uploaded_on}</div>
				<CardBody>
					<CardTitle className="mb-3">
						<ul className="list-inline hash-tags">{all_hash_tags}</ul>
						<h3><a href={`${source_url}`} target="_blank">{title}</a></h3>
					</CardTitle>
					<CardText className="mb-4">
						<a href={`${source_url}`} target="_blank">{uploaded_by}</a>
					</CardText>
					<CardText className="card-desc">{description}</CardText>
				</CardBody>
			</Card>
		)
	}
}
