window.onload = function() {
    let arr = [1999, 2000, 2001, 2002, 2003, 2000, 2001, 2004, 2005, 2000, 2006, 2007, 2008, 2000];
    let mostFrequent = 1; //There will be at least one occurence of each element
    let currentCount = 0;
    let item;

    for (let i=0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] == arr[j]) { currentCount++ };
            if (mostFrequent < currentCount) { 
                mostFrequent = currentCount;
                console.log(mostFrequent);
                item = arr[j];
            }
        }
        currentCount = 0;
    }
    document.getElementById('result').innerHTML = item + " | " + mostFrequent;
}
