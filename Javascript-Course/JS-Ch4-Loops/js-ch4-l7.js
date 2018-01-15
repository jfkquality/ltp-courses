
document.getElementById('btnInterest').addEventListener('click', calcInterest);

function calcInterest(e) {
    document.getElementById('result').innerHTML = "";
    let interestAmt = 0;
    let newBalance = 0;
    let principal = +document.getElementById('principal').value;
    let months = +document.getElementById('periods').value;
    let APR = +document.getElementById('rate').value;
    if (APR < 0 || APR > 100) { APR = 0; }
    let intPerMonth = APR / 12 / 100
    out = document.getElementById('result').innerHTML;
    out += "<table><tbody>"
    out += "<thead><tr><th>Month</th><th>Interest</th> <th>Balance</th></tr></thead>";
    out += "<tbody>";
    interestAmt = principal * intPerMonth;
    for (let i = 1; i <= months; i++) {
        newBalance = principal + (interestAmt * i);
        out += "<tr><td>" + i + "</td><td>" + interestAmt + "</td><td>" + newBalance + "</td></tr>" ;
    }
    out += "</tbody>";
    out +="<tfoot><tr><td>Total</td><td>" + (principal * intPerMonth * months) + "</td><td>" + newBalance + "</td></tr></tfoot>";
    out += "</table>";
    document.getElementById('result').innerHTML = out;
    // document.write(out);
}
