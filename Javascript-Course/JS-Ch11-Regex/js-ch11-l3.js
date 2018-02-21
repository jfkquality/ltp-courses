window.onload = function() {
    document.title = "JS Ch11 Regex Lesson 1";
    let out = "<h1>" + document.title + "</h1>";

    let number = "203.222.2323";
    
    out += "<br>" + number.replace(/[.]/g, "-");

    document.getElementById('result').innerHTML = out;
}
