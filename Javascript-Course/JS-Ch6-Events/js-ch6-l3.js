window.onload = function() {
    let myForm = document.getElementById('myForm');
    myForm.onsubmit = function(e) {
        // console.log(e);
        name = document.getElementById('name').value;
        if (name == "JFK") {
            return false; // Stops the submit. Good to weed out bad data.
        }
        else {
            alert(name);
        }
    }
}
