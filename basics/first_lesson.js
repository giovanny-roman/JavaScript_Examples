// Data Types

// declare variable is create a varable with a name
// example: 
// 	let name
// 
// initialize a variable is giving the variable a value
// example: 
// 	let name = 'hello'

// string is a sequence of characters like letters or numbers
// a string can be assign with single quotes or double quotes
let str_1 = 'hello'
let str_2 = "world"

console.log(str_1)
console.log(str_2)
console.log(str_1 +' ' + str_2 )

// numbers are whole integer
let data_num1 = 1
let data_num2 = 2

// math operations 
console.log(`${data_num1} + ${data_num2} = ${data_num1 + data_num2}`)
console.log(`${data_num1} - ${data_num2} = ${data_num1 - data_num2}`)
console.log(`${data_num1} * ${data_num2} = ${data_num1 * data_num2}`)
console.log(`${data_num1} / ${data_num2} = ${data_num1 / data_num2}`)

// % returns the remainer 
console.log(`${data_num1} % ${data_num2} = ${data_num1 % data_num2}`)

// float point or double are numbers with decimal point
let data_num3 = 0.2

// boolean values are true or false value
let flag = true

// undefined value occurs when you try to access a value thats does not exist 
let name_str
console.log(name_str)

// null is a value that mean nothing
let str = null
console.log(str)

//---------------------------------------------------------------------
// conditions only execute code if a condition is satisfied
// the format of this is:
// 		if(condition){
//			excute code
// 		}else{
//  		excute code
//		}

// ! - (not operator) changes true to false or false to true
// && - (and operator) both expressions need to be true example: true && true

// || - (or operator) at least one side of the expressions need to be true 
// example : 
// true || false
// true || true 
// < - (less) checks if left side is less than right side
// <= - (less than or equal to) checks if left side is less than or equal to right side
// > - (greater than) checks if left side is greater than or equal to right side
// >= - (greater than or equal to) checks if left side is greater than or equal to right side
// === - (equality operator) checks if left side is equal to right side 

// You are able to chain these operators and () to ensure the inside of the parathesis excute first
// example:
// 4 < 5 && 8 > 9
// !flag || flag
// !(5 === 5)

function isEven(param){
	if(param %2 === 0){
		console.log(`${param} is even`)
	}else{
		console.log(`${param} is not even`)
	}
}
isEven(50)


//--------------------------------------------------------------
// array are a list of values
// the start of an array is 0
let arr = []

// adding a value to a specific index
arr[0] = 10
arr[5] = 50

// add value to end of array
arr.push(20)
console.log(arr)

// remove last value of the array and return it
console.log(arr.pop())
console.log(arr)

// removes value in front of array and return it
arr.shift()
// adds value to front of array
arr.unshift(10)

// gets the number of values in an array
arr.length
//----------------------------------------------------
// for loops excute a section a code more than once
// example:
//	for(declaring variable ; condition; updating variable){
//		code
//  }
//
//


function going_thru_list(list){

	for(let i= 0; i < list.length; i = i+1){
		console.log(list[i])
	}
}

// another way to declare a function
let func = (list) =>{
	for(let i= 0; i < list.length; i = i+1){
		console.log(list[i])
	}
}

function getList (list){
	return list
}


//----------------------------------------------
// while loops check a condition and excutes the code until the condition is not met
// in the loop, you will need to update the condition
//
// while(condition){
// 		code
// 		update condition	
//	}
//

function demo (){
	let counter = 0
	while(counter < 10){
		console.log(counter)
		counter = counter +1
	}
}

// demo()


function getSum(list){
	let sum = 0
	for(let i= 0; i < list.length; i = i+1){
		sum = sum + list[i]
	}
	return sum
}

console.log(getSum([1,2,3,4,5]))
// going_thru_list([1,2,3,4,5])
//---------------------------------------------------------------
// swap element
// 