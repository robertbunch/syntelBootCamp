// // Promises...

// // JavaScript is async.

// // console.log("1");
// // setTimeout(()=>{
// // 	console.log("2")
// // },0);
// // console.log("3");
// // for(let i = 0; i < 10000000; i++){
// // 	// looping...	
// // }
// // console.log("Loop done")

// Initial request to get list of movie
// With that list of movies, comes all thier id's. Take the id's and get specific info
// With EACH movie data, we want to get the cast list



// $.getJSON(movieURL,(movieData)=>{
// 	$.getJSON(specificMovieUrl, (thisMovie)=>{
// 		$.getJSON(specificMovieCastUrl,(castData)=>{
// 			finally, we can do something with:
// 			1. movieData
// 			2. thisMovie
// 			3. castData
// 		})
// 	})
// })
// $.prototype.getJSON = function(url,callback){
// 	doing stuff...
// 	callback(dataIGot)
// }

// JS libraries to fake promises
// - Bluebird
// // - Q

// What is a promise?
// - All a promise is, is a JS constructor (class) that gives you a few methods.
// - HOpefully these methods make your code easier to read
// Methods:
// - then
// - all
// - race
// -- resolve
// -- reject

let myFirstPromise = new Promise();
console.log(myFirstPromise)








