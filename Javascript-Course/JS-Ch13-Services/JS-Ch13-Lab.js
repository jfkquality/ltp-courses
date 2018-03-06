
window.onload = function() {
    
    document.getElementById("btnHttp").addEventListener('click', renderText);

}

function renderText(e) {
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        document.getElementById('demo').innerHTML = xmlhttp.responseText; 
    }
    xmlhttp.open("GET", "text.txt", true); 
    xmlhttp.send();
    console.log(xmlhttp.responseXML);
}

