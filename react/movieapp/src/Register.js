import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Register extends Component{

	handleRegister(event){
		event.preventDefault();
		// console.log("Test")\
		//axios.get =  $.getJSON
		//axios.post =  $.ajax({method:post})
		// axios.post(`http://localhost:3030/register`).then((registerData)=>{
		// 	console.log(registerData);
		// })

		// axios is how we make our AJAX requests
		// in other words, how React talks to Express/Spring
		const email = document.getElementById('email').value;
		const password = document.getElementById('pwd').value;
		console.log(password);
		console.log(email);
		axios({
			method: "POST",
			url: "http://localhost:3030/register",
			data: {
				email,
				password
			}
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


