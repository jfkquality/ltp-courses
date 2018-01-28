// window.onload = function() {
    document.getElementById('myButton').addEventListener('click', respond);
    // }
    function respond(e) {
        alert("Hi! You pressed me." + e);
    }
    window.onclick = function() {
        alert("Thanks for clicking the window.");
    }
