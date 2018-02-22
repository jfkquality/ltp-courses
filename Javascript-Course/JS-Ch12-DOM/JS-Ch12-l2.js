window.onload = function() {
    document.title = "Change DOM Elements";
    let out = "<h1>" + document.title + "</h1>";
    
    let content = document.getElementById('main');
    // content.setAttribute('class', 'red');
    content.style.backgroundColor = 'yellow';
    content.style.fontWeight = 'bold';
    

    // out += "<br>" + "";
    document.getElementById('result').innerHTML = out;
}
