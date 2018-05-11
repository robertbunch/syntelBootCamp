// FizzBuzz
// print numbers 1-100
// If the number is div by 3, print fizz INSTEAD OF the number
// If the number is div by 5, print buzz INSTEAD OF the number
// If the number is div by 3 & 5, print fizzbuzz INSTEAD OF anything else

// 1 = 1
// 2 = 2
// 3 = fizz
// 4 = 4
// 5 = buzz
// 6 = fizz
// 9 = fizz
// 15 = fizzbuzz

// describe takes 2 args:
// 1. Name of the testing block
// 2. The function to run (which IS the tests)
// We have acces to describe, because we included jasmine.js
describe("FizzBuzz Unit Tests",()=>{
	// it takes 2 args:
	// 1. Name of THIS test
	// 2. function to run (which is THIS test)
	it(`FizzBuzz must be defined`,()=>{
		// expect takes 1 arg... 
		// 1. a JS statement to evaluate
		expect(fizzBuzz).toBeDefined();
		// if(fizzBuzz() === undefined){test failed}
	});
	it(`Should be 1 for passing FizzBuzz 1`,()=>{
		expect(fizzBuzz(1)).toBe(1);
	});
	it(`Should be 2 for passing FizzBuzz 2`,()=>{
		expect(fizzBuzz(2)).toBe(2);
	});
	it(`Should be Fizz for passing FizzBuzz 3`,()=>{
		expect(fizzBuzz(3)).toBe('Fizz');
	});	
	it(`Should be Buzz for passing FizzBuzz 5`,()=>{
		expect(fizzBuzz(5)).toBe('Buzz');
	});	
	it(`Should be Fizz for passing FizzBuzz 6`,()=>{
		expect(fizzBuzz(6)).toBe('Fizz');
	});	
	it(`Should be FizzBuzz for passing FizzBuzz 15`,()=>{
		expect(fizzBuzz(15)).toBe('FizzBuzz');
	});	

	const random = Math.floor(Math.random() * 1000) * 15 + 15;
	it(`Should be FizzBuzz for passing FizzBuzz ${random}`,()=>{
		expect(fizzBuzz(random)).toBe('FizzBuzz');
	});		

})