window.onload = function() {
    let out = "";
    let result = "";

    // Method 1:
    let teams = ["Yankees", "Mets", "Giants", "Jets", "Knicks", "Nets", "Rangers", "Islanders" ];
    console.log(teams);

    // Method 2: Use contructor of Array object to declare an array
    let computers = new Array("Compaq", "Macintosh", "TI994A", "TRS-80", "Apple II", "Commodore 64", "Osborn Pro");
    console.log(computers);

    // Method 3: Declare an empty array then add to it.
    family = [];
    family.push("John");
    family.push("Joe");
    console.log(family);

    // forEach() is for arrays. Returns the VALUE of each index.
    out += "<strong>forEach()</strong><br>";
    computers.forEach(computer => {
        out += computer + "<br>";
    })

    // for-in gets the PROPERTIES of an object. 
    // Arrays are stored internally in key- value pair. The index is the key.
    out += "<br><strong>for-in: returns PROPERTIES</strong><br>";
    for (pc in computers) {
        out += pc + "<br>";
    }

    // for-of used for enumerable properties (basically objects). Returns values AND/OR properties???.
    out += "<br><strong>for-of</strong></br>";
    for (computer of computers) {
        out += computer + "<br>";
    }

    document.getElementById('result').innerHTML += out + computers;

}

