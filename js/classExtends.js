class Car{
	constructor(make, model, mpg, topSpeed){
		this.make = make;
		this.model;
		this.mpg;
		this.topSpeed;
	}
	start(){
		console.log("Vroom vroom");
	}
}

class ElectricCar extends Car{
	constructor(make, model, maxDistance, topSpeed){
		// BEFORE ANYTHING ELSE HAPPENS IN A SUBCLASS constructor...
		// we have to call teh parent constructor via super

		super(make, model, null, topSpeed);
		this.maxDistance = maxDistance;
	}
	start(){
		// this is an electricCar... they dont make noise
		console.log(`... ... ...`);
	}
}
const tobysCar = new ElectricCar(`Tesla`,`Model S`, `200 miles`,`180mph`);
console.log(tobysCar)
tobysCar.start()

const doMath = require(`./staticMethods`);
console.log(doMath.add(2,3));



