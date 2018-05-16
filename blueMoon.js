// Moon problem

// First full moon of 2000 was Jan 21, 00:40:24
// 29 days
// 12 hours
// 44 minutes

const firstFullMoonOf2000 = new Date("Friday, 21 January 2000, 00:40:24");
console.log(firstFullMoonOf2000)
// getTime is a method available to "Date" objects
const firstFullMoonOf2000InSeconds = firstFullMoonOf2000.getTime() / 1000;
console.log(firstFullMoonOf2000InSeconds)

// A lunar month - 29 days, 12 hours, 44 minutes
const daysAsSeconds = 60 * 60 * 24 * 29;
const hoursAsSeconds = 60 * 60 * 12
const minutesAsSeconds = 60 * 44;
const secondsInALunarMonth = daysAsSeconds + hoursAsSeconds + minutesAsSeconds;
console.log(secondsInALunarMonth)

const tsOfEnd = new Date("Dec 31 2999, 23:59:59").getTime()/1000;
console.log(tsOfEnd)

let currentMoonTS = firstFullMoonOf2000InSeconds;
let fullMoonArray = [];
while(currentMoonTS < tsOfEnd){
	fullMoonArray.push(new Date(currentMoonTS* 1000).getMonth());
	currentMoonTS += secondsInALunarMonth;
}

// console.log(new Date(fullMoonArray[1200] * 1000))
console.log(fullMoonArray)