import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Register extends Component{
	constructor(){
		super();
		this.handleRegister = this.handleRegister.bind(this);
	}


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
		const registerRequest = axios({
			method: "POST",
			url: "http://localhost:3030/register",
			data: {
				email,
				password
			}
		});

		registerRequest.then((registerData)=>{
			console.log(registerData)
			if(registerData.data.msg === "registerSuccess"){
// localStorage is the new cookie. 
// Cookies are inherently insecure. They also can only hold
// 4k. They are sent in their entirety on EVERY request.
// localStorage can hold 5mb, the data is NOT sent to the server (unless you tell it to).
// localStorage is just a HashMap.
				localStorage.setItem('token',registerData.data.token)
				this.props.history.push('/')
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


