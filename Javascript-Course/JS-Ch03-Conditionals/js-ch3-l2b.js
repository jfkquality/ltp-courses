
document.getElementById('btnOne').addEventListener('click', btnClicked);
document.getElementById('btnTwo').addEventListener('click', btnClicked);

function btnClicked(e) {
    // console.log(e);
    document.getElementById('result').innerHTML = "You pressed Button " + e.target.innerHTML;
}



