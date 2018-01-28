window.onload = function() {
    document.title = "JS Ch. 9 Lab - Strings";
    let out = "<h1>" + document.title + "</h1>";   

    out += "<h2>Capitalize the first letter of the string</h2>";
    let myString = "the quick brown fox jumped over the lazy dog.";
    out += "String: " + myString;
    let capString = myString.replace(myString.charAt(0), myString.charAt(0).toUpperCase());
    out += "<br>Capitalized first letter: " + capString;
    out += "<br>But it didn't change the original string: " + myString;
    out += "<br>Slice first letter: " + myString.slice(1);

    out += "<h2>Sorting the split string</h2>";
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
