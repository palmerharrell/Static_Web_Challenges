// The Static Web
// Challenge #2

// Write a Fibonacci number generator that outputs the 
// numbers in the series that are less than 500.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, ... < 500

//		~~~	PLAN	~~~

// The first 2 numbers in Fibonacci Array should be 0 and 1.
// Starting with the 3rd, each number is equal to the sum of 
// the 2 preceding numbers.

var fibonacciSequence = [0,1];
var nextNumber = 0;

function fibonacciGenerator() {
	while (nextNumber < 500) {
		nextNumber = fibonacciSequence[fibonacciSequence.length - 1] + 
			fibonacciSequence[fibonacciSequence.length - 2];
			if (nextNumber >= 500) {
				break;
			}
		fibonacciSequence.push(nextNumber);
	}
}

fibonacciGenerator();

var arrayAsString = fibonacciSequence.join(', ');

// Display result
console.log("2. Fibonacci numbers less than 500: ", fibonacciSequence);
document.getElementById("answer2").innerHTML = "<p>Fibonacci numbers less than 500:</p>" + "<p>" +
	arrayAsString + "</p>";
