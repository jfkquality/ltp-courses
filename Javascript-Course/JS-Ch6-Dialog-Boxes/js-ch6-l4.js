let targetA;
let targetB;
let result;

window.onload = function() {
    targetA = document.getElementById('targetA');
    targetB = document.getElementById('targetB');
    targetA.addEventListener('click', processEvent);
    targetB.addEventListener('click', processEvent);

    result = document.getElementById('result');
}
function processEvent(e) {
    console.log(e);
    let targetClicked = e.target.id;
    let x = e.clientX;
    let y = e.clientY;
    result.innerHTML = "<p>You clicked " + targetClicked + " at coordinates (" + x + ", " + y + ").</p>"
}
// Alternative way to 
// target.addEventListener('mouseover', function () {
//     result.innerHTML = 'You hovered/moused over the target';
// });

