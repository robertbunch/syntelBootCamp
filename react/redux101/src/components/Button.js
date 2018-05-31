import React, {Component} from 'react';

import { connect } from 'react-redux';

import UpdateHome from '../actions/UpdateHome';

// this components job is to CHANGE redux state.
// it will need a function to do so. Once the function
// runs, the dispatcher will let ALL reducers know.

// We need bindActionCreators from Redux so the action
// can dispatch to the reducers
import { bindActionCreators } from 'redux';

class Button extends Component{

	constructor(){
		super();
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event){
		console.log("User clicked");
		// this.props.updateFunction();
		this.props.updateHome();
	}

	render(){
		return(
			<button onClick={this.handleClick} className="btn btn-large btn-success">Click Me</button>
		)
	}
}

// GET DATA FROM REDUX
function mapStateToProps(state){
	return {}
}

// UPDATE REDUX BY A FUNCTION
// mapDispatchToProps takes whatever functions that need to be sent out to the dispatcher, and makes them into props for this component
function mapDispatchToProps(dispatch){
	// bindActionCreators takes 2 args.
	// 1. object: 
	// 	property of local prop name (this.props.whatever)
	// 	value: the callback or ACTION
	// 2. dispatcher
	return bindActionCreators({
		updateHome: UpdateHome
	},
	dispatch)
}

// export default Button;
// dispatch function ALWAYS COMES SECOND
// export connect(null,mapStateToDispatch)(Button);
export default connect(mapStateToProps,mapDispatchToProps)(Button);
