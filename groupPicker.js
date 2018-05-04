let students = [
	`Brandon`,
	`Mariano`,
	`Azedah`,
	`Mayur`,
	`Tyler`,
	`Aleya`,
	`Bob`,
	`Andrew`,
	`Donell`,
	`Ross`,
	`Jonathan`,
	`Tawni`,
	`Shahar`,
	`Newsha`,
	`Victor`,
	`Hill`,
	`Amber`,
	`Dario`,
	`Calder`,
	`Bryant`,
	`Hunter`,
	`Amos`,
	`Tyreem`,
	`Christian`,
	`Toby`,
	`Noelle`,
	`Shane`,
	`Juho`,
	`Dina`,
	`Robert`
];

const classSize = students.length;
const groupSize = 4;

// shuffle the array
for(let i = 0; i < 1000000; i++){
	// Get 2 random numbers to swap
	const rand1 = Math.floor(Math.random() * students.length)
	const rand2 = Math.floor(Math.random() * students.length)
	// let temp = PUT IN HERE, THE VALUE OF STUDENT1
	let temp = students[rand1];
	students[rand1] = students[rand2]
	students[rand2] = temp;
	// TAKE THE VALUE OF STUDENT2 AND PUT IT IN STUDENT1
	// TAKE TEH VALUE OF TEMP AND PUT IT IN STUDENT2
}
// Group the array into smaller groups of our groupSize

let finalGroups = [];
for(let i = 0; i < students.length; i+=groupSize){
	let maxBound = i+groupSize;
	if(maxBound > students.length){
		maxBound = students.length;
	}
	const thisGroup = students.slice(i,maxBound);

	finalGroups.push(thisGroup);
}
console.log(finalGroups)

