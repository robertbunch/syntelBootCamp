const squares = document.getElementsByClassName('square');
// console.log(squares);
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
	clickedSquare.innerHTML = `X`;
}


