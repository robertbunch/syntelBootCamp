import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';

class App extends Component {

  componentDidMount(){
    console.log("THe component has mounted!");
    const url = 'http://api.themoviedb.org/3/movie/now_playing?api_key=fec8b5ab27b292a68294261bb21b04a5'
    $.getJSON(url,(movieData)=>{
      console.log(movieData);
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Sanity Check</h1>
      </div>
    );
  }
}

export default App;
