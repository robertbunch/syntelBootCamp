import React, {Component} from 'react';
import axios from 'axios';

class SingleMovie extends Component{
	constructor(){
		super();
		this.state = {
			movie: {}
		}
	}
	componentDidMount(){
        const mid = this.props.match.params.movieId;
        axios.get(`https://api.themoviedb.org/3/movie/${mid}?api_key=fec8b5ab27b292a68294261bb21b04a5`)
        .then((movieData)=>{
            console.log(movieData);
            this.setState({
                movie: movieData.data
            })
        })
    }
	render(){
		return(
			<div>
				<h1>{this.state.movie.title}</h1>
				<h3>{this.state.movie.tagline}</h3>
			</div>
		)
	}
}

export default SingleMovie;