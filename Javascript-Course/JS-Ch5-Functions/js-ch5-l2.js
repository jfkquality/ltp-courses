window.onload = function() {
    // document.getElementById('calcYears').addEventListener('click',
    //  calculateDogYears(10); //);
    battingAvg(500, 150, 100);
}

function calculateDogYears(ageInHumanYears) {
    // humanYears = document.getElementById('humanYears').value;
    let dogYears = ageInHumanYears * 7;
    resultDiv=document.getElementById('result');
    resultDiv.innerHTML = "<h1>" + dogYears + "</h1>";
}
function battingAvg(atBats, hits, walks) {
    let ba = hits/(atBats - walks);
    resultDiv=document.getElementById('result');
    resultDiv.innerHTML = "<h1>" + ba + "</h1>";
}