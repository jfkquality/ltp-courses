var randomNumber;

window.onload = function() {
    randomNumber = Math.floor((Math.random() * 10) +1)
    console.log(randomNumber)
}
document.getElementById('btnCheck').addEventListener('click', checkGuess);

function checkGuess(e) {
    let userGuess = document.getElementById('guess').value;
    if (randomNumber == userGuess) {
        document.getElementById('result').innerHTML = "<h1>You are right!</h1>";
    }
    else {
        document.getElementById('result').innerHTML ="<h1>Sorry, you're wrong. Try again</h1>";
    }
}
document.getElementById('result').innerHTML = "Hi";
