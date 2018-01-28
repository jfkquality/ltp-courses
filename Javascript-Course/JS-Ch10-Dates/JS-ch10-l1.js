window.onload = function() {
    document.title = "Date Object: Current Date";
    let out = "<h1>" + document.title + "</h1>";
    
    let d = new Date();
    out += d;
    out += "<br>Create date piece by piece m/d/yyyy hr:min: ";
    out += (d.getMonth() + 1) + "/";
    out += d.getDate() + "/";
    out += d.getFullYear();
    out += " " + d.getHours() + ":" + d.getMinutes();

    document.getElementById('result').innerHTML = out;
}
