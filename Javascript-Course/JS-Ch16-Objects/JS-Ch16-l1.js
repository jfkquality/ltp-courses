// One way to create custom object
var team = new Object();
team.name = "Bad News Bears";
team.wins = 100;
team.losses = 25;
team.captain = "Derek Jeter";



window.onload = function() {
    document.title = "lesson title";
    let out = "<h1>" + document.title + "</h1>";

    
    out += "<br>" + "";

    document.getElementById('result').innerHTML = out;
}
