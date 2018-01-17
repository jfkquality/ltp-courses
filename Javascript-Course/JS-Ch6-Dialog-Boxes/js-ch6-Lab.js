let targetA;
let targetB;
let result;

window.onload = function() {
    targetA = document.getElementById('targetA');
    targetB = document.getElementById('targetB');
    // targetA.addEventListener('click', clickEvent);
    // targetB.addEventListener('mouseOver', hoverEvent);
    targetA.onclick = (e) => {
        let x = e.clientX;
        let y = e.clientY;
        alert("You clicked on the red box at x, y coordinates " + x + ", " + y +".");
    }
    targetB.onmouseover = () => {
        alert("You hovered over the blue box");
    }
    window.onkeypress = (e) => {
        console.log(e);
        let keyPressed = e.key;
        alert("You pressed '" + keyPressed + "'.");
    }

    result = document.getElementById('result');
}
// function processEvent(e) {
//     // console.log(e);
//     let targetClicked = e.target.id;
//     let x = e.clientX;
//     let y = e.clientY;
//     result.innerHTML = "<p>You clicked " + targetClicked + " at coordinates (" + x + ", " + y + ").</p>"
// }

