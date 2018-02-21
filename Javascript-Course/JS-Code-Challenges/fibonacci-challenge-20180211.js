window.onload = function() {
    document.title = "Fibonacci Sequence";
    let out = "<h1>" + document.title + "</h1>";
    out += getFib(50);            
    document.getElementById('result').innerHTML = out;
}
function getFib(nth) {
    let Phi = (Math.sqrt(5) + 1)/2;
    let fibSequence = []
    for (let x = 1; x <= nth; x++) {
        fibSequence.push(Math.round(Math.pow(Phi, x) / (Phi + 2)));
    }
    return fibSequence;
}

// https://jsbin.com/wudadobebi/edit?js,console
// https://www.goldennumber.net/fibonacci-series/
// http://www.maths.surrey.ac.uk/hosted-sites/R.Knott/Fibonacci/phi.html

function getFactorial(num) {
    let factorial = 1;
    for (let x = num; x > 0; x--) {
        factorial *= x;
    }
    return factorial;
}
alert(getFactorial(10));

// Got this recursive function from here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Function_scope/en-US/docs/
function factorial(n) {
    if ((n === 0) || (n === 1))
      return 1;
    else
      return (n * factorial(n - 1));
  }
  