let targetA;
let targetB;
let result;

window.onload = function() {
    let returned = confirm("Are you sure you want to delete this?");
    // alert(returned);
    if (returned) {
        alert("Deleted");
    }
    else {
        alert("Not deleted");
    }
}

