// The Static Web
// Challenge #3

// What is the difference between the sum of the squares of the first ten 
// natural numbers, and the square of the sum of the first ten natural numbers?

//		~~~	PLAN	~~~

// 1st 10 Natural Numbers: 0-9 or 1-10, depends who you ask. I'm using 1-10.
// ((1*1) + (2*2) + (3*3) + ... + (10*10)) - Math.pow((1+2+3+...+10), 2)
// Maybe the other way around?

var sumOfSquares = 0;
var sumOfNatNums = 0;
var squareOfSums = 0;
var answer = 0;

function addCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

for (var i = 1; i <= 10; i++) {
	sumOfSquares += i*i;
}

for (var i = 1; i <=10; i++) {
	sumOfNatNums += i;
}

squareOfSums = sumOfNatNums*sumOfNatNums;

answer = squareOfSums - sumOfSquares;

// Display result
console.log("3. Difference between sum of the squares "
	+ "and square of the sums of 1-10: ", addCommas(answer));

document.getElementById("answer3").innerHTML = "Difference between sum of the squares<br> "
	+ "and square of the sums of 1-10: " + addCommas(answer);
