window.onload = function() {
    document.getElementById("btnFind").addEventListener('click', findName);
}

function findName(e) {
    document.getElementById('result').innerHTML = "";
    let nameToFind = document.getElementById("name").value;
    let randomText = document.getElementById("randomText").value;
    let countNames = [["Name Found", "Position Found"]];
    console.log(randomText, nameToFind);

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
        if (nameFound.length == nameToFind.length) {
            countNames.push([nameFound, x]);
        }
    }
    console.log(countNames);
    if (countNames.length == 1) {
        document.getElementById('result').innerHTML = "Name not found.";
    } else {
        for (let i = 0; i < countNames.length; i++) {
            document.getElementById('result').innerHTML += countNames[i] + "<br>";
        }
    }
    document.getElementById('result').innerHTML += "<h3>Number of times found: " + (countNames.length - 1) + "</h3>";
}