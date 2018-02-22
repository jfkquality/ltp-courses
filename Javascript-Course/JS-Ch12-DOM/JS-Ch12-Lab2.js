window.onload = function() {
    document.title = "JS Ch. 12 Lab - DOM Elements";
    // let out = "<h1>" + document.title + "</h1>";
    
    let dropdown = document.getElementById('dropdown-list');
    console.log(dropdown.childNodes);
    console.log(dropdown.children);
    dropdown.removeChild(dropdown.children[3]);

}
