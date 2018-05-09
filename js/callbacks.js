// if JavaScript, functinos are first class objects.
// You can do almost anything to them that you can do to an object.
// - Pass them around
// - store them in variables

const callback = function(){
	console.log("1000 milliseconds have passed!")
	return 10001
}
console.log(typeof(callback))
console.log(`return val of callback`,callback())
setTimeout(callback(), 1000);
setTimeout(callback, 1000);

function a(x){
	// console.log(x);
	return function(y){
		console.log(x+y);
	}
}

// console.log(a(2))
a(2)(3);


const setTimeout = function(callbackToRunLater, timeToWait){
	if (timeToWait has passed){
		callbackToRunLater()
	}
}

