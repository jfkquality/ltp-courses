window.onload = function() {
    document.getElementById("btnFind").addEventListener('click', findName);
}

function findName(e) {
    document.getElementById('result').innerHTML = "";
    let nameToFind = document.getElementById("name").value;
    let randomText = document.getElementById("randomText").value;
    let countNames = [["Name Found", "Position Found"]];
    let out = "";

    for (let x=0; x < randomText.length; x++) {
        let nameFound = "";
        if (randomText[x].toUpperCase() == nameToFind[0].toUpperCase()) {
            nameFound = randomText[x];
            for (let y=1; y < nameToFind.length; y++) {
                if (randomText[x+y].toUpperCase() == nameToFind[y].toUpperCase()) {
                    nameFound += randomText[x+y];
                }
            }
        }
        if (nameFound.toUpperCase() == nameToFind.toUpperCase()) {
            countNames.push([nameFound, x]);
        }
    }
    if (countNames.length == 1) {
        out = "Name not found.";
    } 
    else {
        for (let i = 0; i < countNames.length; i++) {
            out += countNames[i] + "<br>";
        }
    }
    out += "<h3>Number of times '" + nameToFind + "' found: " + (countNames.length - 1) + "</h3>";
    document.getElementById('result').innerHTML = out;
}