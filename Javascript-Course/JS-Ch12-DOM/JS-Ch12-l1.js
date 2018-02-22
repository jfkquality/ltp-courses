window.onload = function() {
    document.title = "DOM Elements getElementById, innerHTML";
    let out = "<h1>" + document.title + "</h1>";
    
    document.getElementById('main').innerHTML += "<p>This element was added dynamically</p>";
    console.log(document.getElementById("main"));

    out += "<br>" + "";
    document.getElementById('result').innerHTML = out;
}
