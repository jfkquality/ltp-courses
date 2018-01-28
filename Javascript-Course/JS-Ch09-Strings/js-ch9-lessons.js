window.onload = function() {
    let myString = "The quick brown fox jumped over the lazy dog.";
    // alert(myString.charAt(0));
    let out = "<h1>Javascript Ch. 9 - String Methods</h1>";
    out += myString;
    
    out += "<h1>Lesson 1 - charAt(), includes(), indexOf()</h1>";
    out += "charAt 0 = " + myString.charAt(0);
    out += "<br>includes space = " + myString.includes(" ");
    out += "<br>indexOf space = " + myString.indexOf(" ");

    out += "<br><br>Loop through myString letter by letter and output each word separately";
    out += "<br>(Uses for loop with continue.)"
    let lastSpace = 0;
    for (let x = 0; x < myString.length; x++) {
        if (myString.charAt(x) != " ") {
            continue;
        }
        out += "<br>";
        for (let y = lastSpace; y < x; y++) {
            out += myString.charAt(y);
        }
        lastSpace = x + 1;
    }
    out += "<br>";
    // Get the last word of the string (b/c there's no space at the end)
    for (let x = lastSpace; x < myString.length; x++) {
        out += myString.charAt(x);
    }

    out += "<br><br>Or... print each word using split() on spaces.";
    out += "<br>(Done after the split() lessson below.)";
    let splitString = myString.split(" ");
    out += "<br>String array: " + splitString;
    for (let x = 0; x < splitString.length; x++) {
        out += "<br>" + splitString[x];
    }

    out += "<h1>Lesson2 - search(), replace()</h1>";
    out += "search for lazy " + myString.search("lazy");
    out += "<br>replace quick with slow in myString. " + myString.replace("quick", "slow");
    out += "<br>myString = " + myString;
    out += "<h3>replace() does NOT change the original string.</h3>"

    out += "<h1>Lesson 3 - slice(), split(), substr()</h1>";
    out += "slice 0-15 " + myString.slice(0, 15);
    out += "<br> myString: " + myString;
    
    out += "<h3>Split()</h3>";
    let csv = "One, Two, Three, Four, Five, Six, Seven";
    let csvArray = csv.split(",");
    out += "String: " + csv;
    out += "<br>Split string array: " + csvArray;
    out += "<br>Index   Value";
    for (let x = 0; x < csvArray.length; x++) {
        out += "<br>" + x + ": " + csvArray[x];
    }

    out += "<h3>substring()</h3>";
    out += myString.substr(10,20);

    document.getElementById('result').innerHTML = out;0
}
