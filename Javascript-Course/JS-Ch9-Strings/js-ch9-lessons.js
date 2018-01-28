window.onload = function() {
    let myString = "The quick brown fox jumped over the lazy dog.";
    // alert(myString.charAt(0));
    let out = myString;
    
    out += "<br><h1>charAt(), includes(), indexOf()</h1>";
    out += "<br>charAt 0 = " + myString.charAt(0);
    out += "<br>includes space = " + myString.includes(" ");
    out += "<br>indexOf space = " + myString.indexOf(" ");

    out += "<br><br>Loop through myString and output each word separately";
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

    out += "<br><br>Or... print each word using split()";
    out += "<br>(Done after the split() lessson below.)";
    let splitString = myString.split(" ");
    for (let x = 0; x < splitString.length; x++) {
        out += "<br>" + splitString[x];
    }

    out += "<br><h1>search(), replace()</h1>";
    out += "<br>search for lazy " + myString.search("lazy");
    out += "<br>replace quick with slow in myString. " + myString.replace("quick", "slow");
    out += "<br>myString = " + myString;
    out += "<br><h3>replace() does NOT change the original string.</h3>"

    out += "<br><h1>slice(), split(), substr()</h1>";
    out += "<br>slice 0-15 " + myString.slice(0, 15);
    out += "<br> myString: " + myString;
    
    out += "<br><h3>Split()</h3>";
    let csv = "One, Two, Three, Four, Five, Six, Seven";
    let csvArray = csv.split(",");
    out += "<br>" + csvArray;
    for (let x = 0; x < csvArray.length; x++) {
        out += "<br>" + csvArray[x];
    }

    out += "<br><h3>substring()</h3>";
    out += "<br>" + myString.substr(10,20);

    document.getElementById('result').innerHTML = out;0
}
