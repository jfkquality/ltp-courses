let target;
let result;

window.onload = function() {
    target = document.getElementById('target');
    result = document.getElementById('result');
    target.onclick = function() {
        result.innerHTML = 'You clicked the target';
    }
    // Alternative way to 
    target.addEventListener('mouseover', function () {
        result.innerHTML = 'You hovered/moused over the target';
    });
    target.onmouseout = function(e) {
        result.innerHTML = 'You moved the mouse off the target';
        console.log(e); // To see all the event properties
    }
}
