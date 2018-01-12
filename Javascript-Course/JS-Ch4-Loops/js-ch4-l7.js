
document.getElementById('btnInterest').addEventListener('click', calcInterest);

function calcInterest(e) {
    document.getElementById('result').innerHTML = "";
    let interestAmt = 0;
    let newBalance = 0;
    let principal = +document.getElementById('principal').value;
    let months = +document.getElementById('periods').value;
    let APR = +document.getElementById('rate').value;
    let intPerMonth = APR / 12 / 100
    out = document.getElementById('result').innerHTML;
    out += "<table>"
    out += "<tr><th>Month</th><th>Intereest</th><th>Balance</th></tr>";
    for (let i = 1; i <= months; i++) {
        interestAmt = principal * intPerMonth * i;
        newBalance = principal + interestAmt;
        out += "<tr><td>" + i + "</td><td>" + interestAmt + "</td><td>" + newBalance + "</td></tr>" ;
    }
    out += "</table>";
    document.getElementById('result').innerHTML = out;
    // document.write(out);
}
