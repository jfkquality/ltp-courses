window.onload = function() {
    document.title = "Find DOM Elements";
    // let out = "<h1>" + document.title + "</h1>";
    
    let result = document.getElementById('result');
    let elements = document.getElementsByTagName('p');
    let classes = document.getElementsByClassName('last');
    console.log(elements);
    console.log(classes);

    // out += "<br>" + "";
    document.getElementById('result').innerHTML = elements;
}
