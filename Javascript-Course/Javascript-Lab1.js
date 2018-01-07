window.onload = function() {
    document.getElementById('console').addEventListener('click', respond);
    document.getElementById('browser').addEventListener('click', respond1);
}
function respond(e) {
    console.log("You clicked console");
}
function respond1(e) {
    alert("You cicked browser");
}
