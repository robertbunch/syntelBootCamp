// add a _ it makes it a "private" variable

class Employee{
	constructor(name, eid, salary, title){
		this.name = name;
		this.eid = eid;
		this.salary = salary;
		this.title = title;
	}

	setName(newName){
		this.name = newName;
	}

	// get name(){
	// 	console.log(`Getting Name...`);
	// 	return this._name;
	// }
	// set name(newName){
	// 	console.log(`Setting Name...`);
	// 	this._name = newName;
	// }
} 

const employee1 = new Employee(`Ross`,192,`190,000`,`Big Shot`);
console.log(employee1);
employee1.setName(`Jos`);
console.log(employee1);