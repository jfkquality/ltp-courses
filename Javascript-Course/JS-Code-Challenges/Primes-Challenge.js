// https://hacknight.sh/week-4-intermediate-primes/. Intermediate Challenge: Primes.
// https://hacknight.sh/week-4-beginner-multiples/. Beginner Challenge: Mutliples
// https://jsbin.com/tokuwuyisa/edit?js,console. My solutions.

// *** BEST SOLUTION AND WITH GREAT EXPLANATION ***
// http://codingtip.blogspot.com/2013/06/find-prime-numbers-in-javascript.html
/** Check if a number is prime*/
function isPrime(numb){
    if(numb%2==0) return false; //I did this in Try1, took out in Try2.
    for(var i=3; i<= Math.sqrt(numb); i=i+2){
      if(numb%i ==0){
        return false;
      }
    }
    return true;
}


// First try: longer, more complex
let primes1 = [1, 2, 3];
for (i = 4; i <= 50; i++ ) {
  if (i % 2 == 0) {
    continue;
  }
  for (j = 3; j < i; j ++) {
    if (i % j != 0) {
      if (primes1.indexOf(i) == -1) {
        primes1.push(i);
      }
    }
    else {
      if (primes1.indexOf(i) > -1) {
        primes1.pop();
      }
      break;
    }
  }
}
console.log(primes1);

// Second try: shorter, simpler
function getPrimes(nth) {
    let primes = [2, 3]; //Prime the primes with the first 3 primes. Removed 1 b/c read 1 is not prime (doesn't have 2 factors; only 1!)
    for (i = 4; i <= nth; i++ ) { //Test every number (after 1st 3 primes)
      primes.push(i); //Add each number to primes array
      for (j = 3; j < i; j++) { //Divide number by every number less than it
        if (i % j == 0) { //Not a prime
          primes.pop(); //Remove number from array b/c it's not prime
          break; //Next number
        }
      }
    }
    return primes;
}
console.log(getPrimes(1000));
  
// Test that the two methods produce the same result
console.log(primes.length, getPrimes(1000).length);
primes2 = getPrimes(1000);
if (primes.length == primes2.length) {
  for (i=0; i<primes.length; i++) {
    if (primes[i] != primes2[i]) {
      console.log(i);
    }
  }
}  
else {
    console.log("They don't equal");
}


// Beginner's Challenge: Multiples.
function multiples(factor, multiple) {
    let factors = [];
    for (i = factor; i <= multiple; i += factor) {
      factors.push(i);
    }
    return factors;
}
console.log(multiples(5, 50));

//Found this online. Great solution.
//Very similar logic to mine but less klugey, more direct, intuitive.
//https://www.codecademy.com/en/forum_questions/51c858349c4e9dd24201011d
//http://jsbin.com/bidatahosu/edit?js,console
for (var counter = 2; counter <= 100; counter++) { //Start from 2 not 0

    var notPrime = false;
    for (var i = 2; i < counter; i++) { //Cleaned this up.
        if (counter%i===0) {
          console.log(i + " " + counter + " " + counter % i); //I added
          notPrime = true;
          break; //I added.
        }
    }
    if (notPrime === false) {
                console.log(counter);
    }
}

//From the same code academy page, by the author of the question no less
//http://jsbin.com/jebutezoki/edit?js,console
function checkprimenumber(n){
    for (c=2; c<n; c++){
      if ( n%c == 0 ){
          return false;
      }
      else { //I added this else; otw it doesn't work
        continue;
      }
    }
    return true; //And I moved this outside the for loop to make it work
}
    
function printprimenumber(number){
    if(checkprimenumber(number) == true){
        // document.write(number+" is Prime Number ");
        console.log(number+" is Prime Number ");
    }else{
        // document.write(number+" is Not Prime Number");
        // console.log(number+" is Not Prime Number");
    }
}
    
function printnumbers(range){
    for (i=1; i<=range; i++){
        printprimenumber(i);
    }
}
    
var maxnumber = 100;
printnumbers(maxnumber);
    
    