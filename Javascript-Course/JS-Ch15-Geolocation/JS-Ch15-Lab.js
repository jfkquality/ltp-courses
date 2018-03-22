let xmlhttp;
window.onload = function() {
    document.title = "JS Ch. 15 Lab - Geolocation Directions";

    document.getElementById('getLocationBtn').addEventListener('click', grabLocation);
}
function grabLocation(e) {
    const options = { enableHighAccuracy: true, timeout: 5000, MaximumAge: 1000};
    navigator.geolocation.getCurrentPosition(showGoogleLink, error, options);
}
let myLocation = document.getElementById("mapsLink");

function showGoogleLink(position) {
    console.log(position);
    let myAddress = "121+Ridgedale+Rd+Fairfield+CT+06824";
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    let url = "https://www.google.com/maps/place/" + myAddress + "/@" + lat + "," + lng;
    myLocation.innerHTML = "<a href=" + url + ">Click Me!</a>";
}
function error(e) {
    alert("hi "  + e.message);
}


