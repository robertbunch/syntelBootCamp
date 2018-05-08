// GLOBALS
// Initialize who's turn it is
let whosTurn = 1;
let gameOver = true;
const messageDiv = document.getElementById('message');
// A place to keep the squares each player has for checkWin
let player1Squares = [];
let player2Squares = [];

let numPlayers = 0;

const winningCombos = [
	['A1','B1','C1'], //ROW 1
	['A2','B2','C2'], //ROW 2
	['A3','B3','C3'], //ROW 3
	['A1','A2','A3'], //COLUMN 1
	['B1','B2','B3'], //COLUMN 2
	['C1','C2','C3'], //COLUMN 3
	['A1','B2','C3'], //DIAG 1
	['A3','B2','C1'] //DIAG 2
];

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

function startGame(num){
	gameOver = false;
	numPlayers = num;
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
	if(!gameOver){
		if(clickedSquare.innerHTML !== `-`){
			// if there isn't a dash, someone has already taken this square. Goodbye.
			messageDiv.innerHTML = `Sorry, that square is already taken.`;
		}else if(whosTurn === 1){
			clickedSquare.innerHTML = `X`;
			whosTurn = 2;
			player1Squares.push(clickedSquare.id);
			// console.log(player1Squares);
			checkWin(1,player1Squares);
			if(numPlayers == 1){
				computerTurn();
			}
		}else{
			clickedSquare.innerHTML = `O`;
			whosTurn = 1;
			player2Squares.push(clickedSquare.id);
			checkWin(2,player2Squares);
		}
	}
}

function computerTurn(){
	stillLooking = true;
	let computerSquare = '';
	while (stillLooking){
		const rand = Math.floor(Math.random(8));
		computerSquare = squares[rand];
		console.log(computerSquare);
		stillLooking = false;
	}
}

function checkWin(whoJustMarked,playerSquares){
	// What do we need to know to check if someone won?
	// 1. What squares they have
	// 2. Are there 3 in a row
	// 3. Who is this?
	// console.log(whoJustMarked);
	// console.log(playerSquares);
	// if the player has all 3 squares in any row in winningCombos then they win!
	// Outter Loop - check each winning combination
	for (let i = 0; i < winningCombos.length; i++){
		// KEEP TRACK OF HOW MANY OF THIS COMBO PLAYER HAS
		let squareCount = 0;
		// Inner Loop - check each square inside each winning combination
		for(let j = 0; j < winningCombos[i].length; j++){
			const currentWinningSquare = winningCombos[i][j];
			// we need to check to see if the player has this square!
			// indexOf, finds the first index of the given element. If it can't find it, it returns -1
			if(playerSquares.indexOf(currentWinningSquare) > -1){
				// I FOUND IT!!! It's in the array! Don't care where... but the player has it
				squareCount++;
			}
		} // end of j/inner loop/we have checked all of this row

		if(squareCount === 3){
			// HOORAY!!! The user had all 3 of the j squares in i combo. We dont care where they are, we just know they are
			messageDiv.innerHTML = `Player ${whoJustMarked} has won the game!`;
			gameOver = true;
			for(let w = 0; w < winningCombos[i].length; w++){
				const thisSquare = document.getElementById(winningCombos[i][w]);
				thisSquare.className += ' winning-square';

			}
		}
	}
}


