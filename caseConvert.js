// Case Convert

// Write a function caseConvert that accepts two arguments. The first is a string, the second is type. If the type is "camelcase" then convert the string to camelcase (each word except the first is capitalized, no spaces). If type is "snakecase" then convert the string to snakecase (each word is separated by a - and all lowercase). As a bonus, accept a string or an array. If it's an array, use .join and proceed accordingly.

 

function caseConvert(str, conversionType){

 //Your code here!!
 	let convertedStr = ``;
 	if(conversionType === `camelCase`){
 		let strArray = str.split(`_`);
 		convertedStr += strArray[0];
 		for(let i = 1; i < strArray.length; i++){
 			convertedStr += strArray[i].replace(strArray[i][0],strArray[i][0].toUpperCase());
 		}
 	}else if(conversionType === `snake_case`){
		let strArray = str.split(/(?=[A-Z])/);
		convertedStr += strArray[0];
 		for(let i = 1; i < strArray.length; i++){
 			convertedStr += `_`;
 			convertedStr += strArray[i].replace(strArray[i][0],strArray[i][0].toLowerCase());
 		}

	}else{
		return `What is your problem?`;
	}
	return convertedStr;
} 

console.log(caseConvert(`dog_house_hello`,`camelCase`));
console.log(caseConvert(`dogHouseHello`,`snake_case`));
console.log(caseConvert(`dogHouseHello`,`go Saints!`));


let name = "Mayur";
console.log('Name: ${name}')
console.log(`Name: ${name}`)
