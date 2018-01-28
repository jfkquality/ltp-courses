window.onload = function() {
    document.getElementById('greetBtn').addEventListener('click', greeting);
}

function greeting() {
    resultDiv=document.getElementById('result');
    resultDiv.innerHTML = "<h1>Greetings</h1>";
}