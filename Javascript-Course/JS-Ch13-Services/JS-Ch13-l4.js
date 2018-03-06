let xmlhttp;

window.onload = function() {
    document.title = "xmlHttpRequest() Object GET";
    let out = "<h1>" + document.title + "</h1>";
    
    xmlhttp = new XMLHttpRequest();
    document.getElementById("btnGetInfo").addEventListener('click', getService);

    // out += "<br>" + "";
    // document.getElementById('result').innerHTML = out;
}

function getService(e) {
    let address = document.getElementById('address').value;

    // CHANGED JSON (from Lesson 1) TO XML
    let url = "https://maps.googleapis.com/maps/api/geocode/xml?address=" + address + "&sensor=false";

    console.log(url);

    // GET request = all parameters are "public", i.e.  in the url
    xmlhttp.onreadystatechange = process; 
    xmlhttp.open("GET", url, true); // true for asynchronous
    xmlhttp.send();
}

function process() {
    // alert(xmlhttp.readyState);
    // status 200=OK (like 404=not found)
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        // console.log(xmlhttp.responseXML);

        // console.log(xmlhttp.responseXML.documentElement);

        console.log(xmlhttp.responseXML.documentElement.getElementsByTagName('result')[0].getElementsByTagName('formatted_address')[0].firstChild.nodeValue);

        console.log(xmlhttp.responseXML.documentElement.getElementsByTagName('result')[0].getElementsByTagName('geometry')[0].getElementsByTagName('location')[0].getElementsByTagName('lat')[0].firstChild.nodeValue);

        let lat = xmlhttp.responseXML.documentElement.getElementsByTagName('result')[0].getElementsByTagName('geometry')[0].getElementsByTagName('location')[0].getElementsByTagName('lat')[0].firstChild.nodeValue;

        let long = xmlhttp.responseXML.documentElement.getElementsByTagName('result')[0].getElementsByTagName('geometry')[0].getElementsByTagName('location')[0].getElementsByTagName('lng')[0].firstChild.nodeValue;

        document.getElementById('result').innerHTML = "Latitude: " + lat + ", Longitude: " + long;

    }
}

// GEOCODE: https://maps.googleapis.com/maps/api/geocode/json?address=27%hartford%turnpike$vernon%ct&sensor=false

// MAP:http://maps.google.com?q=51.03841, -114.01679
