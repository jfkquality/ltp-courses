window.onload = function() {
    let myString = "The quick brown fox jumped over the lazy dog.";
    // alert(myString.charAt(0));
    let out = myString;
    out += "<br><h1>charAt(), includes(), indexOf()</h1>";
    out += "<br>charAt 0 = " + myString.charAt(0);
    out += "<br>includes space = " + myString.includes(" ");
    out += "<br>indexOf space = " + myString.indexOf(" ");
    let lastSpace = 0;
    for (let x = 0; x < myString.length; x++) {
        if (myString.charAt(x) != " ") {
            continue;
        }
        out += "<br>";
        for (let y = lastSpace; y < x; y++) {
            out += myString.charAt(y);
        }
        lastSpace = x+1;
    }
    out += "<br>";
    for (let x = lastSpace; x < myString.length; x++) {
        out += myString.charAt(x);
    }
    document.getElementById('result').innerHTML = out;
}
