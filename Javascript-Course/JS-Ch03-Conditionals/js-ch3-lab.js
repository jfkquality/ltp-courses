var randomNumber;

window.onload = function() {
    document.getElementById('playButton').addEventListener('click', chooseRPS);
    alert("Let's Play! Think of a rock, paper or scissors");
}

function chooseRPS(e) {
    let answer = "";
    randomNumber = Math.floor((Math.random() * 3) +1)
    console.log(randomNumber)
    if (randomNumber == 1) {
        answer = "Rock!";
    }
    if (randomNumber == 2) {
        answer = "Paper!";
    }
    if (randomNumber == 3) {
        answer = "Scissors!";
    }
    document.getElementById('result').innerHTML = "<h1>" + answer + "</h1>";
}
