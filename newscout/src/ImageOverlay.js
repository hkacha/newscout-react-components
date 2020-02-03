import React from 'react';

export class ImageOverlay extends React.Component {
	render(){
		const {image, title, description, uploaded_by, source_url, category, slug_url} = this.props;
		let size = this.props.size !== undefined ? this.props.size : "lg";
		return(
			<article className={`article ${size !== "lg" ? "sm" : ""}`}>
				<section>
					<div className={`section-img ${size !== "lg" ? "sm" : ""}`}>
						<a href={`${slug_url}`}><img src={image} alt={title} className="img-fluid" /></a>
					</div>
					{size === "lg" ?
						<React.Fragment><div className="section-category">{category}</div></React.Fragment>
					:
						""
					}
				</section>
				<div className={`section-content ${size !== "lg" ? "sm" : ""}`}>
					{size === "lg" ?
						<React.Fragment>
							<h3 className="section-title"><a href={`${slug_url}`}>{title}</a></h3>
							<ul className="list-unstyled m-0">
								<li className="list-item"><a href={`${source_url}`}>{uploaded_by}</a></li>
							</ul>
						</React.Fragment>
					:
						<React.Fragment>
							<h5 className="section-title"><a href={`${slug_url}`}>{title}</a></h5>
						</React.Fragment>
					}
				</div>
			</article>
		)
	}
}
