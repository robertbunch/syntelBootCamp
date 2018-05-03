// Map in ES6 was made for Java programmers.
// It's just a key-value pair. It is FAR more protected 
// than a regular object
// It is an iterable.

const myContactsObj = {
	"Rob" : "555-1234",
	"Jim" : "555-9876"
}

for(key in myContactsObj){
	console.log(key)
}

let myContacts = new Map();
console.log(myContacts);
// get and set methods
myContacts.set(`Rob`,`555-1234`);
myContacts.set(`Jim`,`555-9876`);
console.log(myContacts);
const rob = myContacts.get(`Rob`)
console.log(rob);

// CRAZY,...
let aFunc = function(){
	console.log(`HAHAH, I'm a function and I break object keys.`);
}

myContacts.set(aFunc,`you cant break me!`)

console.log(myContacts.size);

myContacts.clear();

console.log(myContacts);