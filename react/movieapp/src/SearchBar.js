import React, { Component } from 'react';

class SearchBar extends Component{
	constructor(){
		super();
		// if we want to use the current "this" inside of any method, 
		// 	we need to "bind" the current this, using the bind method
		this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
	}

	// EVERY JS event gets the event obj
	handleMovieSubmit(event){
		event.preventDefault();
		// console.dir(event.target);
		const searchTerm = event.target[0].value;
		console.log(searchTerm);
		// this.props.searchFunction(searchTerm);
		console.log(this.props)
		this.props.history.push(`/search/${searchTerm}`)
	}


	render(){
		return(
			<form onSubmit={this.handleMovieSubmit}>
				<input type="text" />
				<button className="btn btn-primary" type="submit">Movie Search</button>
			</form>
		)
	}
}

export default SearchBar;

