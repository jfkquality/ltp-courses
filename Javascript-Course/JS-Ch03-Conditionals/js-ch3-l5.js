
window.onload = function() {
    document.getElementById('taxRate').addEventListener('click', showTaxRate);
}
function showTaxRate(e) {
    let year = document.getElementById('taxYear').value;
    let taxRate = 0;
    switch(year) {
        case "2010":
            taxRate = .05;
            break;
        case "2011":
            taxRate = .055;
            break;
        case "2012":
            taxRate = .06;
            break;
        case "2013":
            taxRate = .065;
            break;
        case "2014":
            taxRate = .07;
            break;
        case "2015":
            taxRate = .075;
            break;
        case "2016":
            taxRate = .08;
            break;
        default:
            taxRate = .085;
            break;
    }

    document.getElementById('result').innerHTML = "<strong>" + (taxRate * 100) + "%</strong>";        
}
