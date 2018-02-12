window.onload = function() {
    document.title = "JS Ch11 Regex Lab";
    let out = "<h1>" + document.title + "</h1>";

    let sentence = "This is a test to check hou wmany vowels are in this sentence.";
    
    out += "<br>" + sentence.match(/[aeiou]/gi);
    out += "<br>" + sentence.match(/[aeiou]/gi).length;
    out += "<br>" + /[A-Z]/.test(sentence.slice(0,1));

    document.getElementById('result').innerHTML = out;
}
