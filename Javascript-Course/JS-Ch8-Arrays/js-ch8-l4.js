window.onload = function() {
    let years = [1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008];
    years.forEach(myFunction);
    console.log(years.indexOf(2011));
    years.push(2009);
    years.push(2010, 2011);
    years.forEach(myFunction);
    console.log(years.indexOf(2011));
    years.pop();
    console.log(years.indexOf(2011));
    years.forEach(myFunction);

    names = ["Mary", "Mike", "Tom", "Joe", "John", "Theresa", "Kevin"];
    console.log(names.sort());
    console.log(names);
}
function myFunction(item, index) {
    document.getElementById('result').innerHTML += item + " | " + index + "<br>";
}