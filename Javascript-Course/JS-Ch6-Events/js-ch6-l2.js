let target;
let result;

window.onload = function() {
    textBox = document.getElementById('myText');
    result = document.getElementById('result');
    textBox.onkeypress = function(e) {
        console.log(e);
        if (e.key == 'E' && e.shiftKey == true) {
            alert("WARNING! YOU'RE HARD DRIVE IS BEING DELETED!");
        }
        // result.innerHTML = 'You clicked the target';
    }
    // Alternative way to 
    // target.addEventListener('mouseover', function () {
    //     result.innerHTML = 'You hovered/moused over the target';
    // });
}
