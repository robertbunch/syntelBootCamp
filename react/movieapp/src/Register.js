import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Register extends Component{

	handleRegister(event){
		event.preventDefault();
		// console.log("Test")
		axios.post(`http://localhost:3030/register`).then((registerData)=>{
			console.log(registerData);
		})
	}

  render(){
  	// JSX DEMANDS all self-closing tags, be closed with a /
    return(
	<form onSubmit={this.handleRegister}>
	  <div className="form-group">
	    <label htmlFor="email">Email address:</label>
	    <input type="email" className="form-control" id="email" />
	  </div>
	  <div className="form-group">
	    <label htmlFor="pwd">Password:</label>
	    <input type="password" className="form-control" id="pwd" />
	  </div>
	  <div className="checkbox">
	    <label><input type="checkbox" /> Remember me</label>
	  </div>
	  <button type="submit" className="btn btn-default">Register</button>
	</form>

    ) 
  }
}

export default Register;


