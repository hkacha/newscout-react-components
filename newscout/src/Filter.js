import React from 'react';
import Fade from 'react-reveal/Fade';
import { Collapse, Label } from 'reactstrap';

export class Filter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,

		};
	}

	togglecol = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	toggleFilter = (data) => {
		this.props.toggleFilter(data)
	}

	collapse = this.props.filters.map((item, index) => {
		return (
			<React.Fragment key={index}>
				<div className="fltr-section">
					<div onClick={this.togglecol}>{item.catitems}</div>
					<ul className="list-unstyled">
						{item.subitem.map((subitem, subindex) => {
							return (
								<li key={subindex}>
									<Label check>
										<input type="checkbox" /> {subitem.label}
									</Label>
								</li>
							)
						})}
					</ul>
				</div>
			</React.Fragment>
		)
	})


	render(){
		return(
			<Fade right when={this.props.isFilterOpen} duration={500}>
				<div className={`filter-container ${this.props.isFilterOpen === false ? 'd-none' : ''}`}>
					<div className="filter-box">
						<div className="clearfix">
							<div className="float-left">
								<h6>Filters</h6>
							</div>
							<div className="float-right">
								<div className="closefilter" onClick={this.toggleFilter}>X</div>
							</div>
						</div>
						<hr/>
						<div className="row">
							<div className="col-lg-12">
								{this.collapse}
							</div>
						</div>
					</div>
				</div>
			</Fade>
		)
	}
}