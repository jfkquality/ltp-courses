window.onload = function() {
    document.title = "HTML5 Canvas and Javascript";
    let out = "<h1>" + document.title + "</h1>";

    let theCanvas = document.getElementById("myCanvas");
    let context = theCanvas.getContext("2d");

    context.fillStyle = "#DD0000";
    context.fillRect(10, 10, 100, 100);
    
    context.fillStyle = "#0000dd";
    context.beginPath;
    context.arc(250, 250, 100, 0, 2 * Math.PI);
    context.fill();

    context.moveTo(250, 250);
    context.lineTo(0,0);
    context.moveTo(250, 250);
    context.lineTo(500,0);
    context.stroke();

    out += "<br>" + "";
    console.log(out);

    document.getElementById('result').innerHTML = out;
}
