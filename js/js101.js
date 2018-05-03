	
Print stuff...
semi-colons are optional (like Python)
alert("Hello, World");
EVERYTHING inside the browser.... repeat EVERYTHING belongs to the window object
window.alert("Hello, World");

use the console to print. we will use this ALL the time
console.log("Hello, World");

actually write to the window itself. The Document object, is where all the HTML is at
document.write("Hello, World");

VARIABLES
Same as every other langauge... a variable is a place to stash something (number, string, array, object) that you could write youself, but a var is faster
Data-types available:
1. Strings
2. Numbers - JavaScript has only the Number data type
2a. float
2b. Integer
3. Booleans
4. Arrays
5. Objects (Dictionary/Object)
6. Symbol

// JavaScript uses camelCase
let name = "Robert Bunch";
name = 'Robert Bunch';
name = "Robert \"A CRAZY GUY\" Bunch";
let age;
// var age;
// const
let firstName = "Dario";
let lastName = "Seays";
let fullName = firstName + " " + lastName;
console.log(fullName);
const awesomeGuy = `${firstName} ${lastName}`;

const = 'SELECT * FROM users WHERE name = "' + name + '"'
const = `SELECT * FROM users WHERE name = "${name}"`

const multiLine = ''+
		'<div>'+
			'<p>text</p>'+
		'</div>';

const multiLineTL = `
<div>
	<p></p>
</div>
`

const theMeaningOfLife = `The meaning of life is ${isHappy ? "42" : "No meaning."}`;
console.log(theMeaningOfLife)


// NUMBERS
// no FLOAT, no DOUBLE... just number
const theYear = 2018;
const shortPi = 3.14;
console.log(typeof(shortPi));

// Math is just like everyone else
const twoYearsAgo = theYear - 2;
console.log(twoYearsAgo)
// +, - , /, *, %

// If you cast a string with a different data type, string ALWAYS wins
const whatThe = fullName + 3
console.log(typeof(whatThe))

console.log("4"+5); //"45"

// Booleans
// 1 or 0, off or on, true or false, yes or no
const theTruth = true;
const theLie = false;
console.log(typeof(theTruth))

// if(!theTruth)

// Incramenting...
let num = 1;

// postfixing
num++;
console.log(num);
num--;
console.log(num);

// prefixing
console.log(++num);
console.log(--num);

console.log(num++);
console.log(num--);

// Order of operations for math ... same as what you learned in 3rd grade.
// * and / and % ALWAYS come before + and -
// except for () overrides all

// conditionals
const classSize = 32;
if(classSize > 20){
	console.log("Wow, that's a big class!");
}else if(classSize >= 32){
	console.log("Wow, you are at capacity!");
}else{
	console.log("Default")
}

const a = 3;
const b = `3`;
// == will compare teh value WITHOUT respect to datatype
if(a == b ){
	console.log("Equal");
}
// === will compare value AND datatype
// if((a == b ) && (typeof(a) == typeof(b)){
if(a === b ){
	console.log("Equal"); //false
}
// To check if NOT true...
if(a !== b ){
	console.log("A and b are not Equal");
}


// The Math object
let n = 12.2;
let roundedN = Math.round(n);
console.log(roundedN)
let cielN = Math.ceil(n);
console.log(cielN)
let floorN = Math.floor(n);
console.log(floorN)


// 0.00000000000000001
// floor = 0
// ceil = 1
// parseInt = 0
// round = 0

// 0.99999999999999
// floor = 0
// ceil = 1
// parseInt = 0
// round = 1

let rand = Math.random();
console.log(rand);
let betweenOneAndTen = Math.ceil(rand*10);
console.log(betweenOneAndTen);


// ARRAYS
// init an empty array
let students = [];
// set a var to an array with elements in it
students = [`Shane`,`Calder`,`Amber`];
// array.push, will add a new element onto the end of teh array
students.push(`Donell`);
console.log(students);

// All arrays have a length property. It is always accessible
console.log(students.length)
// Jus tlike Java and everyone else, the 1st index is 0

// Strings are just fancy arrays
const finallyAGirl = `Tawni`;
students.push(`Tawni`);
console.log(finallyAGirl.length)
console.log(students.length)

// Any type of datatype in any index in an array
// 1. string
// 2. array
// 3. object
// 4. Booleans
// 5. number

// Map<String,String> myMap = new HashMap

// const myContacts = new Map();

const chaoticArray = [
	`Mariano`,
	436,
	[
		`orange juice`,
		`JayZ`,
		3,
		{
			age: 21
		}
	]
]

console.log(chaoticArray[2][0])

let atlTeams = [
	`Braves`,
	`Falcons`,
	`Hawks`,
	`Thrashers`
];

atlTeams.pop();
console.log(atlTeams);
atlTeams.push(`Atl United`);
console.log(atlTeams);

// .shift() = will remove and RETURN the first element in the array
console.log(atlTeams.shift());
console.log(atlTeams);

// copyOfRange = java for get part of an array
let nfcSouthTeams = [
	`Falcons`,
	`Panthers`,
	`Saints`,
	`Bucs`
];

// slice copy from teh array... takes 2 args:
// 1. index to start at
// 2. index to stop at ... NOT INCLUSIVE
// SLICE DOES NOT MUTATE THE ARRAY
const l = nfcSouthTeams.slice(1,3);
console.log(l)
// slice is also good for coping an array
let arr = [1,2,3,4,5];
let arr2 = arr.slice();
arr2.push(6);
console.log(arr);

let obj = {
  name: "Captain Jack Sparrow"
}

let obj2 = obj;
obj2.friend = `Barbosa`;
console.log(obj);

// Fiter out even numbers
const randomNumbers = [1,6,3,2,3,65,43,23425,2342,2345,2345];
let evenNumbers = [];
for(let i = 0; i < randomNumbers.length; i++){
	if(randomNumbers[i] % 2 == 0){
		evenNumbers.push(randomNumbers[i]);
	}
}
console.log(evenNumbers);

// all arrays have a map method
// map will loop through the array and return
// each time through a new element for the new array
const evenNumberArray = randomNumbers.filter(function(number){
	if(number % 2 == 0){
		return number;
	}
});
console.log(evenNumberArray)

// Splice is prototype of all arrays... if you are an array... you have splice
// splice will allos you to add and remove from any index
// splice takes 3 args:
// 1. Where to start (just like slice)
// 2. How mayn to delete (can be 0)
// 3. What to insert, if anything (can be left out)
randomNumbers.splice(6, 5,"Huh");
console.log(randomNumbers)






const someNumbers = [1,2,3,4,5];
let newNumbers = someNumbers.map((number)=>{
	return number+3
})
console.log(newNumbers)

const reduceResult = someNumbers.reduce((aggregatedThing, number)=>{
	return aggregatedThing + number;
})
console.log(reduceResult);

const evenOnly = randomNumbers.filter((number)=>{
	return number % 2 == 0;
})
console.log(evenOnly);

let newHTML = 
	`<div>
		<div class="Such">${name}</div>
	</div>`
