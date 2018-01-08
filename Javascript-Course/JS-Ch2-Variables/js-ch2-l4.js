window.onload = function() {
    let operand1 = 1235;
    let operand2 = 854.2;
    let operand3 = 15;

    let out = "";

    out += "Addition: " + (operand1 + operand2);
    out += "<br>Subtraction: " + (operand1 - operand2);
    out += "<br>Multiplication: " + (operand1 * operand2);
    out += "<br>Divsion: " + (operand1 / operand2);
    out += "<br>Modulos: " + (10 % 3);
    out += "<br>Even: " + (12 % 2);
    out += "<br>Odd: " + (13 % 2);
    out += "<br>Operand3: " + operand3;
    out += "<br>++Operand3 (pre fixed increment): " + (++operand3);
    out += "<br>Operand3++ (post fixed increment): " + (operand3++);
    out += "<br>Operand3: " + operand3;
    out += "<br>--Operand3 (pre fixed decrement): " + (--operand3);
    out += "<br>Operand3-- (post fixed decrement): " + (operand3--);
    out += "<br>Operand3: " + operand3;
    out += "<br>Operand3 += 3: " + (operand3 += 3);
    out += "<br>Operand3 -= 3: " + (operand3 -= 3);
    out += "<br>Operand3 *= 3: " + (operand3 *= 3);

    document.getElementById("result").innerHTML = out;
}
