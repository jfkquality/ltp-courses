window.onload = function() {
    document.title = "Add/Delete DOM Elements";
    let out = "<h1>" + document.title + "</h1>";
    document.getElementById('result').innerHTML = out;
    
    let theList = document.getElementById('myList'); //The <ul>
    let node = document.createElement('li'); //Create the <li>
    let text = document.createTextNode('Yes'); //Create text for li
    node.appendChild(text); //Add the text to the <li>
    theList.appendChild(node); //Add the <li> to the <ul>
    
    //Do it again to add another list item
    node = document.createElement('li');
    text = document.createTextNode('The Beatles');
    node.appendChild(text);
    theList.appendChild(node);

    console.log(theList.childNodes.length);
    for (let i = 0; i < theList.childNodes.length; i++) {
        console.log(theList.childNodes[i]);
    } //9 childNodes

    for (let i = 0; i < theList.children.length; i++) {
        console.log(theList.children[i]);
    } //5 children
    
    console.log(theList.childNodes);
    console.log(theList.children);
    console.log(theList.childNodes[3]); //Band 2
    console.log(theList.children[3]); //Yes

    theList.removeChild(theList.childNodes[3]); //Band 2
    console.log(theList.childNodes[3]); //The 3rd text 
    console.log(theList.children[3]); //The Beatles (previously #4)
    theList.removeChild(theList.children[3]); //The Beatles
    console.log(theList.childNodes[3]); //The 3rd text
    console.log(theList.children[3]); //Undefined b/c li is only 3 now so [2] is the last
        // theList.removeChild(theList.childNodes[3]);
    // console.log(theList.childNodes[3]);
    // theList.removeChild(theList.childNodes[3]);
    // console.log(theList.childNodes[3]);

    // out += "<br>" + "";
}
