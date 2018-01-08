var age; // Put here, age is a Public or script scope. Not recommended to declare this way
window.onload = function() {
    let score = 1000; // Function Scope
    age = 42;
    out();
}
function out() { // This won't work b/c the var declaration is insided window.onload. Move age declaration outside of window.onload function
    document.getElementById("result").innerHTML = "Age: " + age
}
