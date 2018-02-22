// Beginner Solution:

for (var x=1; x <=100; x++) {
  if ( x % 3 === 0 && x % 5 === 0) {
    //console.log("FizzBuzz");
  } else if ( x % 5 === 0 ) {
    //console.log("Buzz");
  } else if ( x % 3 === 0 ) {
    //console.log("Fizz");
  } else {
    //console.log(x);
  }
}

// Intermediate Solution:

for (var i = 1; i <= 100; i++) {
  let result = (i % 3 === 0 && i % 5 === 0) ? "FizzBuzz" : (i % 3 === 0) ? "Fizz" : (i % 5 === 0) ? "Buzz" : i;
  //console.log(result);
}

// Good and Working Solutions:

var possibleWinners = ['Greg LaVallee', 'Chris Meyer', 'Jeremy Gross', 'John Knight']
   

// Random Number Function To Select Winner:

function ChickenDinner(goodSolutions) {
  var winner = Math.floor(Math.random() * goodSolutions.length);
  return goodSolutions[winner];
}

console.log(ChickenDinner(possibleWinners));