window.onload = function() {
    let out = "";
    let grades = {a: 93, b: 72, c: 56, d: 88, e: 85, f: 91};
    // let arr = []; // Not needed. From ch. 4 video
    // i = 0; // Not needed. From ch. 4 video
    // for (arr[i++] in grades) { // Wrong way to use for-in. From ch. 4 video
    for (grade in grades) {
        out += grade + "<br>";
        // console.log(arr); // From ch. 4 video
    }
    document.getElementById('result').innerHTML = out;
}

