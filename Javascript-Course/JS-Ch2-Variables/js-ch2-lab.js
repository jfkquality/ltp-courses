var number1;
var number2;
var total;

document.getElementById('addingButton').addEventListener('click', addNumbers);

function addNumbers(e) {
    number1 = Number(document.getElementById('inputOne').value);
    number2 = Number(document.getElementById('inputTwo').value);
    let oper = document.getElementById('operators').value;
    if (oper === '+') {
        total = number1 + number2;
    }
    if (oper === '-') {
        total = number1 - number2;
    }
    if (oper === '*') {
        total = number1 * number2;
    }
    if (oper === '/') {
        total = number1 / number2;
    }
    document.getElementById('result').innerHTML = total;
}

