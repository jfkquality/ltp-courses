let xmlhttp;

window.onload = function() {
    document.title = "xmlHttpRequest() Object POST";
    let out = "<h1>" + document.title + "</h1>";
    
    xmlhttp = new XMLHttpRequest();
    let params = "pc=1&wc=3&sp=n"; // pass in xmlhttp.send(params)
    let url = "https://makemeapassword.org/api/v1/passphrase/plain";
    console.log(url);
    xmlhttp.onreadystatechange = process; 
    xmlhttp.open("POST", url, true); // true for asynchronous
    // xmlhttp.setRequestHeader("wc", "1"); // WRONG!
    // xmlhttp.setRequestHeader("pc", "1"); // WRONG!
    // xmlhttp.setRequestHeader("sp", "n"); // WRONG!
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // xmlhttp.setRequestHeader("Content-length", params.length); // Not allowed?
    // xmlhttp.setRequestHeader("Connection", "close"); // Not allowed?
    xmlhttp.send(params);
// }
}
function process() {
    // status 200=OK (like 404=not found)
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { 
        console.log(xmlhttp.responseText);
        alert(xmlhttp.responseText);
    }
}

// GEOCODE: https://maps.googleapis.com/maps/api/geocode/json?address=27%hartford%turnpike$vernon%ct&sensor=false

// MAP:http://maps.google.com?q=51.03841, -114.01679
