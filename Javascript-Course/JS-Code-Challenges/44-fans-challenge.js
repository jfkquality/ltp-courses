let fans = Array(44).fill(false); 
fans[0] = true;
console.log(toggle(fans));

function toggle(arr) {
    for (let x = 1; x < arr.length; x++){
        for (let y = 1; y <= Math.floor(arr.length/x); y++) {
            if (arr[y*x] == undefined) { continue; }
            arr[y*x] = !arr[y*x];
            // console.log(x, y, y*x, !arr[y*x], arr[y*x]);
        }
        // console.log(arr[x]);
    }
    let count = 0;
    arr.forEach(element => {
       if (element) {count++;}
    });
    return count;
}
