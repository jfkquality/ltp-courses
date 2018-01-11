var randomNumber;

window.onload = function() {
    document.getElementById('playButton').addEventListener('click', chooseRPS);
    alert("Let's Play! Think of a rock, paper or scissors");
}

function chooseRPS(e) {
    randomNumber = Math.floor((Math.random() * 3) +1)
    console.log(randomNumber)
    if (randomNumber == 1) {
        document.getElementById('result').innerHTML = "<h1>Rock!</h1>";
    }
    if (randomNumber == 2) {
        document.getElementById('result').innerHTML = "<h1>Paper!</h1>";
    }
    if (randomNumber == 3) {
        document.getElementById('result').innerHTML = "<h1>Scissors!</h1>";
    }
}
