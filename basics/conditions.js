
let flag = true

let flag_2 = false

// ! - (not operator) changes true to false or false to true
// && - (and operator) both expressions need to be true example: true && true

// || - (or operator) at least one side of the expressions need to be true 
// example : 
// true || false
// true || true 



//  bit operators (https://www.w3schools.com/js/js_bitwise.asp)
//  we mostly never use bit operators


// < - (less) checks if left side is less than right side
// <= - (less than or equal to) checks if left side is less than or equal to right side
// > - (greater than) checks if left side is greater than or equal to right side
// >= - (greater than or equal to) checks if left side is greater than or equal to right side

// You are able to chain these operators and () to ensure the inside of the parathesis excute first
// example:
// 4 < 5 && 8 > 9
// !flag || flag
// !(5 === 5)



// === - (equality operator) checks if left side is equal to right side 

// == - (truthy) 
// truthy table in the loose equality comparisons with == section of(https://www.sitepoint.com/javascript-truthy-falsy/) 


// Math operator
// - - (subtract value)
// + - (add value)
// * - (multiply value)
// / - (divides value)
// % - (return the remainer of division)

// ++ - adds 1 
// -- - substracts 1

function displayEven(){
	// loop from 0 - 10 including 10
	for(let i = 0; i <= 10; i++){
		// checks if i is even
		if(i % 2 === 0){
			console.log(i)
		}
	}
}

displayEven()



// display odd numbers from 0 - 10
// display 10 divide by numbers from 0 - 10 hint: can you divide by 0

// truth tables 
// A B | A && B
// ______________ 
// F F | F
// F T | F
// T F | F
// T T | T

// complete truth table

// A B | A || B
// ______________ 
// F F | 
// F T | 
// T F | 
// T T | 

// complete truth table

// A B | !(A && B)
// ______________ 
// F F | 
// F T | 
// T F | 
// T T | 