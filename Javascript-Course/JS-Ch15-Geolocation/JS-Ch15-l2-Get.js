let xmlhttp;
window.onload = function() {
    document.title = "JS Ch. 15 L2 - Geolocation";
    let out = "<h1>" + document.title + "</h1>";

    navigator.geolocation.getCurrentPosition(success, fail);
}

    function success(position) {
        console.log(position);
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        latitude.innerHTML += lat;
        longitude.innerHTML += lng;
        getPositionInfo(lat, lng);
    }
    function fail(e) {
        alert("hi "  + e.message);
    }
    function getPositionInfo(lat, long) {
        let myKey = "AIzaSyB8lXoy7SEXnnamnqy9qAXTWqAvOz271Ro";
        let url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + lat + "," + long;
        url += "&radius=5000&types=restaurant&key=" + myKey;
        console.log(url);
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = processPlaces; //How do you know this is a (callback) function?
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }
    function processPlaces() {
        if (xmlhttp.readyState == 4) {
            let jsonResponse = JSON.parse(xmlhttp.responseText);
            let places = jsonResponse.results;
            console.log(places);
            places.forEach(place => {
                // console.log(place.name, place.vicinity);
                result.innerHTML += "<p>" + place.name + " " + place.vicinity + "</p>";
            });
        }
    }

    out += "<br>" + "";
    document.getElementById('result').innerHTML = out;
