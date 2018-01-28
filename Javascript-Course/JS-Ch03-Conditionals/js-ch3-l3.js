
document.getElementById('btnLetterGrade').addEventListener('click', letterGrade);

function letterGrade(e) {
    // console.log(e);
    let letterGrade = "";
    let inputGrade = document.getElementById('numberGrade').value;
    if (inputGrade >= 90) {
        letterGrade = "A"
    }
    else if (inputGrade >= 80) {
        letterGrade = "B"
    }
    else if (inputGrade >= 70) {
        letterGrade = "C"
    }
    else if (inputGrade >= 60) {
        letterGrade = "D"
    }
    else {
        letterGrade = "F"
    }
    document.getElementById('result').innerHTML = "<strong>" +letterGrade + "</strong>";        
}



