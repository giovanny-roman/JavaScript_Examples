
function loop_example_1(){

	let arr = [1,2,3,4,5]

	// forloop consist of 3 parts
	// 1. initializing values like let i = 0
	// 2. condition the loop to excute
	// 3. updating values

	for(let i = 0; i < arr.length; i++){
		// arr[i] retrieves the value in arr at index i
		console.log(arr[i])
	}
}

function loop_example_2(){

	let arr = [1,2,3,4,5]

	// forloop consist of 3 parts
	// 1. initializing values like let i = 0
	// 2. condition the loop to excute
	// 3. updating values

	for(let i = 0; i < arr.length; i = i +1){
		// arr[i] retrieves the value in arr at index i
		console.log(arr[i])
	}
}

loop_example_1()
loop_example_2()


// homework 
// create a list of 1 to 10 and print the numbers
// create a list of 1 to 10 and print the numbers in reverse order
// create a list of 1 to 10 and print every other value hint: look at example 2