// GLOBALS
// Initialize who's turn it is
let whosTurn = 1;
let gameOver = false;
const messageDiv = document.getElementById('message');
// A place to keep the squares each player has for checkWin
let player1Squares = [];
let player2Squares = [];


// Go get everything with a class of square (all the button tags) and put them in the constant "squares"
const squares = document.getElementsByClassName('square');
// console.log(squares);
// Loop through all the sqaures, and add a listener to them. A click listener! So that if the user clicks on one of them, it will run our function
for(let i = 0; i < squares.length; i++){
	// console.log(squares[i]);
	squares[i].addEventListener('click', function(event){
		// console.log(event);
		markSquare(squares[i]);
	})
}

function markSquare(clickedSquare){
	// console.log("User clicked a sqaure");
	// console.log(squareID)
	// const clickedSquare = document.getElementById(squareID);
	// Two things happen when someone clicks on a square
	// 1. We change the DOM ... this part is for the user
	// 1a. Check to see if the user can mark that square
	// 2. We change variables for JS
	// 2b. give control of the board to the other player

	// check to see if there's already a letter in teh square
	if(clickedSquare.innerHTML !== `-`){
		// if there isn't a dash, someone has already taken this square. Goodbye.
		messageDiv.innerHTML = `Sorry, that square is already taken.`;
	}else if(whosTurn === 1){
		clickedSquare.innerHTML = `X`;
		whosTurn = 2;
		player1Squares.push(clickedSquare.id);
		console.log(player1Squares);
		checkWin();
	}else{
		clickedSquare.innerHTML = `O`;
		whosTurn = 1;
		player2Squares.push(clickedSquare.id);
		checkWin();
	}
}

function checkWin(){
	// What do we need to know to check if someone won?
	// 1. What squares they have
	// 2. Are there 3 in a row
	// 3. Who is this?
}


