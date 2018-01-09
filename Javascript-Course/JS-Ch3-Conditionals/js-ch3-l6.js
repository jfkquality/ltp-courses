
window.onload = function() {
    document.getElementById('showBonus').addEventListener('click', calcBonus);
}
function calcBonus(e) {
    let sales = document.getElementById('sales').value;
    let bonuPct = 0;
    let bonus = 0;
    if (sales < 10000) {
        bonusPct = 0;
    }
    if (sales >= 10000) {
        bonusPct = .05;
    }
    if (sales >= 20000) {
        bonusPct = .055;
    }
    if (sales >= 30000) {
        bonusPct = .06;
    }
    if (sales >= 40000) {
        bonusPct = .065;
    }
    if (sales >= 50000) {
        bonusPct = .07;
    }
    bonus = sales * bonusPct

    document.getElementById('result').innerHTML = bonus;        
}
