window.onload = function() {
    let x = 220;
    let y = 235;

    let sum = addThese(x, y);
    let difference = subtractThese(x, y);
    let product = multiplyThese(x, y);
    document.getElementById('result').innerHTML = sum + " " + difference + " " + product;
}

function addThese(a, b) {
    let c = a + b;
    return c;
}
function subtractThese(a, b) {
    let c = a - b;
    return c;
}
function multiplyThese(a, b) {
    let c = a * b;
    return c;
}