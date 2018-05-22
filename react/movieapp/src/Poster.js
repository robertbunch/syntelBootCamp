// Required Dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Poster extends Component{
	constructor(){
		super();
	}

	render(){
		console.log(this.props)
		const movieId = this.props.movie.id;
		return(
			<div className="col-sm-3">
				<h3>{this.props.movie.title}</h3>
				<Link to={`/movie/${movieId}`}>
					<img src={this.props.poster} /> 
				</Link>
				<p>{this.props.movie.overview}</p>
			</div>
		)
	}
}

export default Poster;