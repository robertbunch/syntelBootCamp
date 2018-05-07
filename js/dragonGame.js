console.dir(document)

// When the onclick happens to the button... this function will run
function rollDice(){
	// console.log(`The user just clicked the roll button!`);
	// random number between 1-6
	let rand1 = Math.ceil(Math.random() * 6);
	let rand2 = Math.ceil(Math.random() * 6);

	// The dice images all follow this convention:
	// dN.gif where n is a number between 1-6
	// Use JS to update the DOM. Update the dice images, 
	// so that they use the image from our random numbers.
	let dice = document.getElementById('dice');
	dice.children[0].src = `./dragon-assets/d${rand1}.gif`
	dice.children[1].src = `./dragon-assets/d${rand2}.gif`
	console.dir(dice);

	if(rand1 + rand2 > 8){
		document.getElementById('dragon').children[0].src = "https://pmctvline2.files.wordpress.com/2018/02/lisa-simpson.jpg?w=620";
		document.getElementById('dragon').children[0].style.height = "100px";
		document.getElementById('dragon').children[0].style.width = "200px";
		document.getElementById('message').innerHTML = "<h1>You have defeated the dragon!</h1>";
	}else{
		document.getElementById('dragon').children[0].src = "https://i.ytimg.com/vi/7Ucs_-fQe7I/maxresdefault.jpg";
	}


}

// console.log(window.document);
// console.dir(window.document);
// When you are in the browser... EVERYTHING belongs to the window object.
// There is NO expcetion to this, so you dont even need to include it.
// window.alert(`Hey, Donell!`);

// let dragon = document.getElementById('dragon');
// console.dir(dragon);
// dragon.innerHTML = `<h1>JavaScript was here!</h1>`;

