let btnPress;

window.onload = function() {
    btnPress = document.getElementById('hoursButton');
    btnPress.onclick = runCheckHours;
}
function runCheckHours() {
    let hoursSlept = document.getElementById('hoursInput').value;
    checkHours(hoursSlept);
}
function checkHours(numHours) {
    if (numHours >= 8) {
        alert("You're getting enough sleep");
    }
    else {
        alert("Go back to bed. You need more sleep!");
    }
}

