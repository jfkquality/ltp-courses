window.onload = function() {
    let myString = "the quick brown fox jumped over the lazy dog.";

    let out = "";
    out += "<h1>Javascript Ch. 9 Lab - Capitize First Letter of a String</h1>";   
    out += "String: " + myString;
    let capString = myString.replace(myString.charAt(0), myString.charAt(0).toUpperCase());
    out += "<br>" + capString;
    out += "<br>But it didn't change the original string: " + myString;
    out += "<br>Slice first letter: " + myString.slice(1);
    out += "<h1>Sorting the split string</h1>";
    out +=  capString.split(" ").sort();

    out += "<br><br>Original String"
    for (let x = 0; x < myString.split(" ").length; x++) { 
        out += "<br>" + x + ": " + myString.split(" ").sort()[x];
    }
    out += "<br><br>Capitalized first letter";
    for (let x = 0; x < capString.split(" ").length; x++) { 
        out += "<br>" + x + ": " + capString.split(" ").sort()[x];
    }
    out += "<br>Original string: " + myString;
    out += "<br>Uppercase string: " + myString.toUpperCase();
    out += "<br>Original string: " + myString;

    document.getElementById('result').innerHTML = out;
}
