let btnPress;

window.onload = function() {
    btnPress = document.getElementById('myButton');
    btnPress.onclick = function() {
        alert('You clicked the button');
    }
    // Use an arrow function instead
    btnPress.onmouseover = () => {
        alert('You hovered over the button');
    }
}
