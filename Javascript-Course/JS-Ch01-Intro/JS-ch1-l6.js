var clicks = 0;
window.onload = function() {
    document.getElementById('content').addEventListener('click', respond);
    document.getElementById('one').addEventListener('click', respond1);
    document.getElementById('two').addEventListener('click', respond2);
}
function respond(e) {
    console.log("You clicked content");
    document.getElementById('content').style.color = "red";
    // document.getElementById('one').innerHTML += "<h1>Welcome to My World</h1>"
    // document.getElementById('two').innerHTML += "Javascript Specialist Course"
    // document.getElementById('myButton').style.display = "none";
}
function respond1(e) {
    console.log("You clicked paragraph one");
}
function respond2(e) {
    console.log("You clicked paragraph two");
}
