import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import Poster from './Poster';
import SearchBar  from './SearchBar';

class App extends Component {
  // constructor runs ONCE. When the object/component is created
  constructor(props){
    // call super in order to pass up to React.Component whatever it needs
    super(props);
    // After super, we can use the word "this"
    // set the initial state of the var: this.state.moviePosters to []
    this.state = {
      moviePosters: []
    }
    this.newUserSearch = this.newUserSearch.bind(this);
  }

  // special lifecycle method
  // will run as soon as the FIRST render runs
  // this is where AJAX goes
  componentDidMount(){
    console.log("THe component has mounted!");
    const url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5'
    $.getJSON(url,(movieData)=>{
      console.log(movieData);
      this.setState({
        moviePosters: movieData.results
      });
    });
  };

  newUserSearch(movieTitle){
    const url = `https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=${movieTitle}`;
    $.getJSON(url,(movieData)=>{
      console.log(movieData);
      this.setState({
        moviePosters: movieData.results
      })
    })
  }

// EVERY React component MUST have a render
  render() {

    if(this.state.moviePosters.length === 0){
      return (<h1>Loading...</h1>)
    }

    console.log(this.state.moviePosters)
    const posters = this.state.moviePosters.map((aMovie,index)=>{
      const imagePath =  `http://image.tmdb.org/t/p/w300${aMovie.poster_path}`;
      return (<Poster name="Snoopy" movie={aMovie} poster={imagePath} />)
    });
    console.log(posters);
    console.log("Render is running...")
    // return a single dom element (jsx_)
    return (
      <div className="App">
        <h1>Movies Now Playing</h1>
        <SearchBar searchFunction={this.newUserSearch} />
        {posters}
      </div>
    );
  }
}

export default App;

