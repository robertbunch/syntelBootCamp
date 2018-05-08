// const x = ()=>{
// 	console.log("Hello, World")
// }
// x()

// JavaScript will ALWAYS run the next line that can RIGHT NOW.
setTimeout(()=>{
	console.log("I am first")
},0);
console.log("I am second");
setTimeout(()=>{
	console.log("I am third");
},100);
for(let i = 0; i < 10000001; i++){
	if (i===10000000){
		console.log("I am fourth");
	}
}

