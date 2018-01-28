window.onload = function() {
    document.title = "JS Ch.10 Lab - Is it the Weekend?";
    // document.getElementsByTagName("h1").innerHTML = document.title;

    document.getElementById('checkDay').addEventListener("click", weekend);

}
function weekend(e) {
    let out = "";
    let dateInput = document.getElementById('date').value;
    d = new Date(dateInput);
    console.log(d.getDay());
    if (d.getDay() === 5 || d.getDay() === 6) {
        out += "Hurray! It's the weekend!";
    }
    else {
        out += "Sorry, another work day";
    }
    // m = d.getMonth();
    // days = daysInMonth(m);
    alert(out);
    // document.getElementById('result').innerHTML = out;
}
// daysInMonth(month) {
// }
