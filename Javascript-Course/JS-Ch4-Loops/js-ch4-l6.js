window.onload = function() {
    let counter = 0;
    while (counter <= 100) {
        // console.log(counter);
        if (counter%2 == 0) { counter++;  continue; } // when true, skips just this iieration of the loop.
        document.getElementById('result').innerHTML += counter + "<br>";
        counter++;
        if (counter == 50) {break;} // completely stops the loop
    }
}

