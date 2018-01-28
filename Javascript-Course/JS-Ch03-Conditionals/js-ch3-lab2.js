var randomnumber
let answer = "";

window.onload = function() {
    document.getElementById('playButton').addEventListener('click', chooseRPS);
    alert("Let's Play! Think of a rock, paper or scissors");
}

function chooseRPS(e) {
    randomNumber = Math.floor((Math.random() * 3) +1);
    console.log(randomNumber)
    switch (randomNumber) {
        case 1:
            answer = "Rock!";
            break;
        case 2: 
            answer = "Paper!";
            break;
        default:
            answer = "Scissors!";
            break;
    }
    document.getElementById('result').innerHTML = "<h1>" + answer + "</h1>"
}
