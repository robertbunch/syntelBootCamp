// pure function, aka, dumb function
// Presentational Component. It's job to present
// some HTML... it's dumb and it's good at it's job
// Outside factors do not affect this function
// function Coin(){
// 	return(
// 		<h1>Sanity Check</h1>
// 	)
// }

// createClass is a helper function to help old browsers
// pretend to make classes.
// Classes are smart functions.
// They are not pure.
// They change their output, based on application state.
const Coin = React.createClass(
	{
		sides: [
			'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg',
			'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'		
		],		
		getInitialState: function(){
			return {
				image: this.sides[0]
			}
		},
		flipCoin: function(){
			// In here, we change this.state.image
			// ANYTIME we change state, render will be called
			let newSide = 0;
			let randomSide = Math.round(Math.random());
			newSide = this.sides[randomSide];
			// WE NEVER EVER EVER EVER DO THIS:
			// this.state.image = newSide
			this.setState({
				image: newSide
			});
		},

	// Smart functions don't have pure return (always return same).
	// They have a render method. The render method
	// has the return statement. All rules apply (jsx, single element)		
	// render is special. Render is called when it's
	// time to put the component in the DOM
		render: function(){
			return(
				<div>
					<button onClick={this.flipCoin}>Click To Flip</button>
					<img src={this.state.image} />
				</div>
			)
		}
	}

)

// 2 args:
// 1. What
// 2. Where
ReactDOM.render(
	<Coin />,
	document.getElementById('root')
)