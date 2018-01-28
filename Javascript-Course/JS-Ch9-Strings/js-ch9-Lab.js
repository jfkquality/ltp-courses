window.onload = function() {
    let myString = "the quick brown fox jumped over the lazy dog.";

    let out = "myString: " + myString;
    
    out += "<br><h1>Capitize First Letter of myString</h1>";   
    out += "<br>" + myString.replace(myString.charAt(0), myString.charAt(0).toUpperCase());


    document.getElementById('result').innerHTML = out;0
}
