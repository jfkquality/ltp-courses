window.onload = function() {
    document.title = "JS Ch11 L2 Regex";
    let out = "<h1>" + document.title + "</h1>";
    
    let pattern = /.tv/;
    out += "<br>" + pattern.search("LearnToProgram.tv");

    let pattern2 = /(.tv|.com)/;
    out += "<br>" + pattern2.test("LearnToProgram.tv");

    let pattern3 = /(.tv|.com)/;
    out += "<br>" + pattern3.test("LearnToProgram.biz");

    let pattern4 = /^(.tv|.com)/;
    out += "<br>" + pattern4.test("LearnToProgram.biz");

    let myString = "The quick brown fox jumped over the lazy dogs";
    out += "<br>" + myString.search(/[0-9]/);

    let myString2 = "The quick brown fox jumped over the lazy dogs";
    out += "<br>" + myString2;
    let searchFor = prompt("What would you like to search for?");
    let searchPattern = "/" + searchFor + "/";
    out += "<br>" + myString2.search(searchPattern);



    document.getElementById('result').innerHTML = out;
}


