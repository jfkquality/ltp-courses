window.onload = function() {
    document.title = "JS Ch11 L1 Regex";
    let out = "<h1>" + document.title + "</h1>";
    
    let pattern = /x/;

    out += "<br>" + pattern.test("I marked the paer wiath an x");

    document.getElementById('result').innerHTML = out;
}


