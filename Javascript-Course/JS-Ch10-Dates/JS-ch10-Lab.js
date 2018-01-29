window.onload = function() {
    document.title = "JS Ch.10 Lab - Is it the Weekend?";

    /*The getElementsByTagName() method returns a collection of all elements in the document with the specified tag name, as a NodeList object.
    The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0. */
    document.getElementsByTagName("h1")[0].innerHTML = document.title;

    document.getElementById('checkDay').addEventListener("click", weekend);

}
function weekend(e) {
    let out = "";
    let markup = [];
    let dateInput = document.getElementById('date').value;
    d = new Date(dateInput);
    m = d.getMonth()
    y = d.getYear();
    console.log(m, y);
    out += checkWeekend(d);
    alert(out);
    markup = daysInMonth(m, y);
    // out = "";
    // for (let x = 0; x < markup.length; x++) {
    //     out += markup[x] + "<br>";
    // }
    days = daysInMonth(m+1, y);
    monthName = getMonthName(d);
    let out2 = "<p>The number of days in " + monthName + " is " + days + "</p>";
    document.getElementById('result').innerHTML = out2;
}
function checkWeekend(checkDate) {
    let out = "";
    if (d.getDay() === 5 || d.getDay() === 6) {
        out += "Hurray! It's the weekend!";
    }
    else {
        out += "Sorry, another work day";
    }
    return out;
}
function daysInMonth(month, year) {
    console.log(month, year);
    let monthEndDays = [];
    let dateToSearch = new Date(year, month, 0);
    let days = dateToSearch.getDate();

    return days;
    /* This outputs days in all the months in an array */
    // for (let x=1; x<=12; x++) {
    //     days = new Date(year, x, 0).getDate();
    //     // console.log(days);
    //     monthEndDays.push(days);
    // }
    // return monthEndDays;
}
function getMonthName(date) {
    let locale ="en-us"
    return date.toLocaleString(locale, { month: "long"});
}
