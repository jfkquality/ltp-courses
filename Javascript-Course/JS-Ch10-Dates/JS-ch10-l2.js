window.onload = function() {
    document.title = "Date Object: Custom Date";
    let out = "<h1>" + document.title + "</h1>";
    
    let a = new Date(2017, 5, 1, 12, 00);
    out += "Custom Date: " + a;
    let c = new Date();
    out += "<br>Current Date: " + c;
    out += "<br>Date Now: " + Date.now();
    let d = Date.now();
    // out += " " + d.toISOString();
    let oneDay = 24 * 60 * 60 * 1000;
    out += "<br>Yesterday: " + new Date(c - oneDay);
    out += "<br>Last Week: " + new Date(c - oneDay * 7);
    out += "<br>Last Year: " + new Date(d - oneDay * 365);
    // out += "<br>Create date piece by piece m/d/yyyy hr:min: ";
    // out += (d.getMonth() + 1) + "/";
    // out += d.getDate() + "/";
    // out += d.getFullYear();
    // out += " " + d.getHours() + ":" + d.getMinutes();

    document.getElementById('result').innerHTML = out;
}
