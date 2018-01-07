var clicks = 0;
window.onload = function() {
    console.log("window.onload run...");
    document.getElementById('myButton').addEventListener('click', respond);
}
function respond(e) {
    clicks++;
    console.log("Number of clicks " + clicks);
}
