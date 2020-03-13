import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from "react-share";

export class VerticleCardItem extends React.Component {

	getArticleId = () => {
		this.props.getArticleId(this.props.id)
	}

	render(){
		
		const {image, title, description, uploaded_on, uploaded_by, slug_url, source_url, category, hash_tags, is_loggedin} = this.props;
		let final_url = "http://newscout.in"+slug_url
		
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
					<div className="clearfix">
						<div className="float-left">
							<CardLink href={`${source_url}`}>Read More...</CardLink>
						</div>
						<div className="float-right">
							<ul className="list-inline m-0 sharelink">
								<li className="list-inline-item">
									<div>
										<FacebookShareButton url={final_url} quote={title}>
											<FacebookIcon size={20} round />
										</FacebookShareButton>&nbsp;
										<TwitterShareButton url={final_url} quote={title}>
											<TwitterIcon size={20} round />
										</TwitterShareButton>&nbsp;
										<WhatsappShareButton url={final_url} quote={title}>
											<WhatsappIcon size={20} round />
										</WhatsappShareButton>
									</div>
									<FontAwesomeIcon icon={faShareAlt} />
								</li>
								<li className="list-inline-item">
									<FontAwesomeIcon icon={faBookmark} onClick={this.getArticleId} />
								</li>
							</ul>
						</div>
					</div>
				</CardBody>
			</Card>
		)
	}
}
