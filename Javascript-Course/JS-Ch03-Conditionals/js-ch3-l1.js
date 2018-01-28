
let age = 18;
let citizen = true;

if (age >=18 && citizen) {
    document.getElementById('result').innerHTML = "<h1>You may legally vote</h1>";
}

let age2 = 15;
let parentPresent = true;

if (age2 >= 17 || parentPresent) {
    document.getElementById('result').innerHTML += "<p>You may also see the movie</p>";
}


