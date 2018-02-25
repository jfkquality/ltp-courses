window.onload = function() {
    document.title = "Find DOM Elements";
    let out = "<h1>" + document.title + "</h1>";
    
    let result = document.getElementById('result');
    let elements = document.getElementsByTagName('p');
    let classes = document.getElementsByClassName('last');
    console.log(elements);
    console.log(classes);

    out = "";
    console.log(elements.length);
    console.log(elements.hasChildNodes());
    // if (elements.hasChildNodes) {
    //     for (let x = 0; x < elements.hasChildNodes.length; x++) {
    //         out += "<p> Child " + elements.childNode[x] + "</p>";
    //     }
    // }
    console.log(out);
    // out = elements

    // out += "<br>" + "";
    document.getElementById('result').innerHTML = out;
}
