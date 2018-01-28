window.onload = function() {
    let myString = "the quick brown fox jumped over the lazy dog.";

    let out = "";
    out += "<h1>Capitize First Letter of a String</h1>";   
    out += "String: " + myString;
    out += "<br>" + myString.replace(myString.charAt(0), myString.charAt(0).toUpperCase());
    out += "<br>But it didn't change the original string: " + myString;
    out += "<br>Slice first letter: " + myString.slice(1);
    out += "<h1>Sorting the split string</h1>";
    out +=  myString.split(" ").sort();
    for (let x = 0; x < myString.split(" ").length; x++) { 
        out += "<br>" + x + ": " + myString.split(" ").sort()[x];
    }

    document.getElementById('result').innerHTML = out;
}
