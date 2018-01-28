let targetA;
let targetB;
let result;

window.onload = function() {
    document.getElementById("confirmBtn").addEventListener('click', runConfirm);
}
function runConfirm(e) {
    let message = "";
    let name = prompt("What is your name?");

    if (confirm("Continue this stupid lab.")) {
        message = "You're a glutton for punishment";
    }
    else {
        message = "Good answer";
    }
    message += ", " + name + "!";
    document.getElementById('text').innerHTML = message;
}

