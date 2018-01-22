window.onload = function() {
    let out = "";
    for (let counter = 0; counter <= 100; counter++) {
    // while (counter <= 100) {
        console.log(counter);
        out += counter;
        out += "<br>";
        // counter++;
    }
    // document.getElementById('result').innerHTML = out;
    // out = "";
    for (let x = 100; x > 0; x--) {
        if (x%2 == 0 ) {
            out += x + "<br>";
        }
    }
    document.getElementById('result').innerHTML = out;
}

