var clicks = 0;
// document.write("Hello!!"); // DON'T DO THIS!
window.onload = function() {
    // document.getElementById('one').innerHTML = "<h1>Welcome to My World</h1>"
    // document.getElementById('two').innerHTML = "Javascript Specialist Course"
    document.getElementById('myButton').addEventListener('click', respond);
}
function respond(e) {
    document.getElementById('one').innerHTML += "<h1>Welcome to My World</h1>"
    document.getElementById('two').innerHTML += "Javascript Specialist Course"
    document.getElementById('myButton').style.display = "none";
}
