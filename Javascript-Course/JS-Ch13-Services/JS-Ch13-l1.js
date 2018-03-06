let xmlhttp;

window.onload = function() {
    document.title = "xmlHttpRequest() Object GET";
    let out = "<h1>" + document.title + "</h1>";
    
    xmlhttp = new XMLHttpRequest();
    document.getElementById("btnGetInfo").addEventListener('click', getService);

    out += "<br>" + "";
    document.getElementById('result').innerHTML = out;
}

function getService(e) {
    let address = document.getElementById('address').value;

    let url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&sensor=false";

    console.log(url);
    // readystate property values 1-4. 1=no communication started; 4= communication done. We're looking for 4.

    // GET request = all parameters are "public", i.e.  in the url
    xmlhttp.open("GET", url, true); // true for asynchronous
    xmlhttp.onreadystatechange = process; 
    xmlhttp.send();
}

function process() {
    // alert(xmlhttp.readyState);
    // status 200=OK (like 404=not found)
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        // console.log(xmlhttp.responseText);
        alert(xmlhttp.responseText);
    }
}

// GEOCODE: https://maps.googleapis.com/maps/api/geocode/json?address=27%hartford%turnpike$vernon%ct&sensor=false

// MAP:http://maps.google.com?q=51.03841, -114.01679
