// The Static Web
// Challenge #1

// What is the smallest number that can be divided by each of 
// the numbers from 1 to 10 without any remainder?

//		~~~	PLAN	~~~
// Start at 1
// Loop and divide by 1 thru 10
// If the number % i === 0 all 10 times, that's the number
// If not, increment number and loop again

var smallestNumber = 0;
var numberToTest = 1;		// Starting at 0 creates an infinite loop
var timesDivisible = 0; // When this reaches 10, assign numberToTest to smallestNumber

function addCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

do {
	for (var i = 1; i <= 10; i++) { // Check if current number is divisible by 1 thru 10
		if (numberToTest%i === 0) {
			timesDivisible++; // Count how many the current number is divisible by
		}
	}
	if (timesDivisible === 10) {
		smallestNumber = numberToTest;
	} else {
		numberToTest++; // Move on to next number, if current number is not divisible by all 10
	}
	timesDivisible = 0; // Reset counter before trying next number
} while (smallestNumber === 0);  // Loop until smallestNumber is found


// Display result
console.log("1. Smallest number divisible by 1 thru 10: " + addCommas(smallestNumber));
document.getElementById("answer1").innerHTML = "The smallest number divisible by 1" +
	" thru 10 is: " + addCommas(smallestNumber);
