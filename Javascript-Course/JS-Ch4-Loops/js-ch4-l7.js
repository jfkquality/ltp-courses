
document.getElementById('btnInterest').addEventListener('click', calcInterest);

function calcInterest(e) {
    document.getElementById('result').innerHTML = "";
    let interestAmt = 0;
    let newBalance = 0;
    let principal = +document.getElementById('principal').value;
    let months = +document.getElementById('periods').value;
    let APR = +document.getElementById('rate').value;
    let intMonth = APR / 12 / 100
    out = document.getElementById('result').innerHTML;
    out += "Mth   Principal   Intereest  Balance<br>";
    for (let i = 1; i <= months; i++) {
        interestAmt = principal * intMonth * i;
        newBalance = principal + interestAmt;
        out += i + " " + principal + " " + interestAmt + " " + newBalance + "<br>" 
    }
    document.getElementById('result').innerHTML = out;
    // document.write(out);
}
