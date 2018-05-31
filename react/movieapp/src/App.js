// Contrib modules
import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
// add react router
// BrowserRouter as Router in the MAIN component in our app now
// Link is the new <a href="">
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// Custom Components
import Poster from './Poster';
import SearchBar  from './SearchBar';
import About from './About';
import MovieSearch from './MovieSearch';
import SingleMovie from './SingleMovie';
import BootstrapNavBar from './BootstrapNavBar';
import Login from './Login';
import Register from './Register';

class App extends Component {
  // constructor runs ONCE. When the object/component is created
  constructor(){
    // call super in order to pass up to React.Component whatever it needs
    super();
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
    // NOWPLAYING REQUEST HAS BEEN MOVED TO 
    // THE MOVIESEARCH COMPONENT
  };

  newUserSearch(movieTitle){
    // REMOVED ALL THIS
    // IT HAS BEEN ABSTRACTED TO SEARCHBAR
  }

// EVERY React component MUST have a render
  render() {

    // if(this.state.moviePosters.length === 0){
    //   return (<h1>Loading...</h1>)
    // }

    // console.log("Render is running...")
    // return a single dom element (jsx)
    return (
      // ROUTER GOES AROUND EVERYTHING
      <Router>
        <div className="App">
          <Route path="/" component={BootstrapNavBar} />
          <Route path="/" component={SearchBar} />
          <Route exact path="/" component={MovieSearch} />
          <Route exact path="/about" component={About} />
          <Route exact path = "/login" component={Login} />
          <Route exact path = "/register" component={Register} />
{/*          You dont always have to give it a component.
          You can give it a callback which can render componenets*/}
          <Route exact path="/search/:searchTerm" component={MovieSearch} />
          <Route exact path="/movie/:movieId" component={SingleMovie} />
        </div>
      </Router>
    );
  }
}

export default App;

