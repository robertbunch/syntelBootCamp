// // JS, since ES1, up through ES5, used constructor 
// // functiosn to make objects. There was NO class keyword.
// // All a constuctor is, is a function that takes arguments
// // and it has it's own context... "this"

// // The function should be proper case, as a convention.
// function Player(name, heroClass, weapon){
// 	// inside the function, is where you decalre your 
// 	// instance variables
// 	this.name = name;
// 	this.class = heroClass;
// 	this.weapon = weapon;
// 	// this.species = `Human`;
// 	// this.takeDamage = function(damagePoints){
// 	// 	console.log(`${this.name} has taken ${damagePoints} damage!`);
// 	// }
// 	this.threatenTV = function(angerLevel){
// 		console.log(`${this.name} has exploded with rage` );
// 	}
// }

// 	Player.prototype.takeDamage = function(damagePoints){
// 		console.log(`${this.name} has taken ${damagePoints} damage!`);
// 	}

// 	Player.prototype.species = `human`;

// let player1 = new Player(`Dario`, `ultimateWarrior`,`sword`);

// console.log(player1)
// console.log(player1.name)
// player1.numOfKills = 1000;
// console.log(player1)
// let player2 = new Player(`Hunter`,`Hunter`,`Bow`);
// console.log(player2);

// player1.takeDamage(15);
// player2.takeDamage(12);

// console.log(Player);

// a class is NOT a function
class Player{
	constuctor(name,heroClass, weapon, speed){
		this.name = name;
		this.heroClass = heroClass;
		this.weapon = weapon;
		this.speed = speed;
	}
	takeDamage(damagePoints){
		console.log(`${this.name} has taken ${damagePoints} of damage.`)
	}
}





