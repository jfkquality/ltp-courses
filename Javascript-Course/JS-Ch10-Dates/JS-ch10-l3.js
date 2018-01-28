window.onload = function() {
    document.title = "Date Object: Other Methods";
    let out = "<h1>" + document.title + "</h1>";
    
    out += "<h2>Setters & Getters</h2>";
    let d = new Date();
    out += "Current Date: " + d;
    d.setFullYear(2020)
    d.setHours(18);
    out += "<br>Set Year: " + d.getFullYear();
    out += "<br>Date after setters: " + d;

    out += "<h2>toJSON()</h2>";
    out += d.toJSON();

    out += "<h2>toString() - JS default for displaying a date</h2>";
    out += d.toString();

    out += "<h2>toLocaleDateString()</h2>";
    out += d.toLocaleDateString();

    out += "<h2>toUTCString()</h2>";
    out += d.toUTCString();

    out += "<h2>toISOString()</h2>";
    out += d.toISOString();

    let oneDay = 24 * 60 * 60 * 1000;

    document.getElementById('result').innerHTML = out;
d.toJSON();
}
