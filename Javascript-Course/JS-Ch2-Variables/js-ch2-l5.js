window.onload = function() {
    let operand1 = 1235;
    let operand2 = 854.2;
    let operand3 = 15;

    let out = "";

    out += "Math.PI: " + Math.PI;
    out += "<br>Math.sqrt(81): " + Math.sqrt(81);
    out += "<br>Math.abs(61-51): " + Math.abs(61-51);
    out += "<br>Math.round(61/2.97): " + Math.round(61/2.97);
    out += "<br>Math.round(PI): " + Math.round(Math.PI);
    out += "<br>Math.random() betw 0-1: " + Math.random();
    out += "<br>Math.random() betw 1-10: " + Math.floor((Math.random() * 10) +1);

    document.getElementById("result").innerHTML = out;
}
