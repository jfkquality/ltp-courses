window.onload = function() {
    document.title = "JS Ch. 12 Lab - DOM Elements";
    // let out = "<h1>" + document.title + "</h1>";
    
    let para = document.getElementById('boldColor');
    // para.addEventListener('mouseover', colorWords);
    // para.addEventListener('mouseout', returnColor);
    para.onmouseover = function() {colorWords()};
    para.onmouseout = function() {returnColor()};
        

    // out += "<br>" + "";
    // document.getElementById('result').innerHTML = elements;
}
function colorWords() {
    let boldWords = document.getElementsByTagName('strong');
    for (let x = 0; x < boldWords.length; x++) {
        boldWords[x].style.color = 'red';
    }
}
function returnColor() {
    let boldWords = document.getElementsByTagName('strong');
    for (let x = 0; x < boldWords.length; x++) {
        boldWords[x].style.color = 'black';
    }

}