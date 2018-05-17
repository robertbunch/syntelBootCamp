// React is a bunch of legos. The legos are called components.
// A component is a fancy name for a class-like UI thing.
// A component is REGULAR JAVASCRIPT UNTIL you get inside 
// the return... once inside, you are writing JSX
function Scoreboard(){
	console.log("SANITY CHECK. IS ROB LYING?")
	// Main is going to return a piece of JSX. EVERY
	// React component MUST return a single DOM element.
	return(
		<div className="scoreboard">
			<div className="header">
				<h1>Celtics vs Cavs - Game {1+2}</h1>
			</div>
		</div>
		<div className="teams">
			<div className="team">
				<div className="team-name">
					<h3>Boston</h3>
				</div>
			</div>
			<div className="team">
				<div className="team-name">
					<h3>Cleveland</h3>
				</div>
			</div>
		</div>
	)
}

// the render method (isnide ReactDOM) takes 2 arguments:
// 1. What.
// 2. Where
// React.createElement('h1','Sanity Check')
ReactDOM.render(
	// <h1>Sanity Check!</h1>,
		<Scoreboard />,
		// <Scoreboard />
		// <Scoreboard />
		// <Scoreboard />
		// <Scoreboard />
		// <Scoreboard />
		// <Scoreboard />
		// <Scoreboard />,
	document.getElementById('root')
)
