import React from 'react';
import Fade from 'react-reveal/Fade';

export class Search extends React.Component {

	constructor(props) {
		super(props);
	}

	toggleSearch = (data) => {
		this.props.toggleSearch(data)
	}

	render(){
		return(
			<Fade right when={this.props.isSearchOpen} duration={500}>
				<div className={`search-container ${this.props.isSearchOpen === false ? 'd-none' : ''}`}>
					<div className="closebox" onClick={this.toggleSearch}>X</div>
					<div className="row">
						<div className="col-lg-4 offset-lg-4">
							<div className="search-box">
								<h1 className="text-center">Search News</h1>
								<input type="text" className="form-control" />
							</div>
						</div>
					</div>
				</div>
			</Fade>
		)
	}
}