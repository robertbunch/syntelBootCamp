import React, {Component} from 'react';

class Button extends Component{

	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event){
		console.log("User clicked");
		this.props.updateFunction();
	}

	render(){
		return(
			<button onClick={this.handleClick} className="btn btn-large btn-success">Click Me</button>
		)
	}
}

export default Button;