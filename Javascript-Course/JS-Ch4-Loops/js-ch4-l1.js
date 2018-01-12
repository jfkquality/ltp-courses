window.onload = function() {
    let counter = 0;
    while (counter <= 100) {
        console.log(counter);
        document.getElementById('result').innerHTML += counter + "<br>";
        counter++;
    }
}

