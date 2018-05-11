// Prior to ES6 (2015)...
// there were 5 primitive data types:
// 1. Boolean
console.log(Boolean(true) === Boolean(true))
// 2. undefined
console.log(undefined === undefined)
// 3. null
console.log(null === null)
// 4. String
console.log(String(`Hello`) === String(`Hello`))
console.log(`Hello` === `Hello`)
// 5. Number
console.log(2 === 2);
// A primitive is anything that's NOT an object.
// Primitives are also stored by VALUE
// Primitives are also built into the langauge 
// at the lowest level

// console.log({} === {})

// let obj = {};
// let obj2 = {};
// console.log(obj == obj2)

// // let obj3 = obj;
// let obj3 = Object.assign({},obj);
// obj3.newProp = "Dario";
// console.log(obj)

// let arr = [];
// let arr2 = arr;
// arr2.push(1);
// console.log(arr)

console.log(Symbol() === Symbol())
// Symbol = a something. identifier. a reference.
// Reason: ABSOLUTELY UNIQUE. No name collisions

// ALL CAPS is how you get mad on reddit.
// and a good way to get people to ignore your post.
// And how you let otehr programmers know that 
// this is a constant.
const CARMAKE = Symbol(`carMake`);
const CARMODEL = Symbol(`carModel`);
const CARCOLOR = Symbol(`carColor`);

class Car{
	constructor(make, model, color){
		this[CARMAKE] = make;
		this[CARMODEL] = model;
		this[CARCOLOR] = color;
	}
	get color(){
		return this[CARCOLOR];
	}
	set color(newColor){
		this[CARCOLOR] = newColor
	}
}

const jimsCar = new Car(`Tesla`,`S`,`Black`);
console.log(jimsCar[CARMAKE])
jimsCar.color = `Red`
console.log(jimsCar.color)

