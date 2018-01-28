
document.getElementById('btnLetterGrade').addEventListener('click', letterGrade);

function letterGrade(e) {
    // console.log(e);
    let letterGrade = "";
    let inputGrade = document.getElementById('numberGrade').value;
    if (inputGrade >= 0 && inputGrade <= 100) {
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
    }
    else {
        alert("Please input a number between 0 and 100 inclusive");
    }
    document.getElementById('result').innerHTML = "<strong>" +letterGrade + "</strong>";        
}
