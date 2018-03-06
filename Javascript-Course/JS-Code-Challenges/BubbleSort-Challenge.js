// Also here (snapshot): http://jsbin.com/wogobahoqe/edit?js,console
// Latest changes: http://jsbin.com/wogobahoqe/edit?js,console
<<<<<<< HEAD
// Even latest changes: http://jsbin.com/wogobahoqe/edit?js,console
=======
>>>>>>> 40e66ca09add0e2c44c27985d930e0ffdefd810e

// How to change operators: and here http://jsbin.com/japarediko/edit?js,console
//https://stackoverflow.com/questions/5834318/are-variable-operators-possible
/* 
<<<<<<< HEAD
e.g. 1.
=======
>>>>>>> 40e66ca09add0e2c44c27985d930e0ffdefd810e
var operators = {
    '+': function(a, b) { return a + b; },
    '<': function(a, b) { return a < b; },
     // ...
};

e.g. 2.
var op = '+';
alert(operators[op](10, 20));
*/
/*
getting-the-objects-property-name
https://stackoverflow.com/questions/4260308/getting-the-objects-property-name 
var keyNames = Object.keys(myObject);
console.log(keyNames);
// Object.keys() gives you an array of property names belonging to the input object.
*/

document.title = "Bubble Sort, Reverse Sort";
let out = "<h1>" + document.title + "</h1>";

// console.log("Bubble Sort");
// out += "<p> Bubble Sort</p>";

let numCount = prompt("How many numbers will be in the list?");
let highestNum = prompt("What's the highest number the list should go?");
let sortUp = prompt("Enter '0' for descending order or '1' for ascending order");
sortUp = (sortUp == 1) ? true : false;
let nums = randomNumsList(numCount, highestNum); // num of nums, highest num
let UpDown = {
  "up": function(a,b) { return a > b; },
  "down": function(a,b) { return a < b; }
}


// console.log("Random list: " + nums);
out += "<p>Random list: " + nums + "</p>";
// Can make it recursive? Something like this? With a callback?
/*
nums.foreach(num in nums, function() {
 swap(nums); 
}
*/

let sortThis = sortNums(nums, sortUp);
let sortedNums = sortThis.sorted;

// console.log(sortedNums.length + " numbers ranging from " + sortedNums[0] + " to " + sortedNums[sortedNums.length -1]);
// console.log("Sorted list, ascending = " + sortUp + ":", sortedNums);
// console.log("Passes: " + sortThis.passes);

let UpDownKeys = Object.keys(UpDown);
out += "<p>" + sortedNums.length + " numbers ranging from " + sortedNums[0] + " to " + sortedNums[sortedNums.length -1] + "</p>";
out += "<p>Sorted list, ascending = " + sortUp + ": " + sortedNums + "</p>";
console.log("Sorted list, sort direction is " + ((sortUp) ? UpDownKeys[UpDownKeys.indexOf("up")] : UpDownKeys[UpDownKeys.indexOf("down")]), sortedNums);

out += "<p>Passes: " + sortThis.passes + "</p>";

// console.log("Reversed list: " + sortNums(sortedNums, !sortUp).sorted);
out += "<p>Reversed list: " + sortNums(sortedNums, !sortUp).sorted + "</p>";

// console.log("Double reversed list: " + reverseOrder(sortedNums));
out += "<p>Double reversed list: " + reverseOrder(sortedNums) + "</p>";
// console.log("Double reversed list: " + reverseOrder(sortNums(sortedNums, sortUp).sorted));
// out += "<p>Double reversed list: " + reverseOrder(sortNums(sortedNums, sortUp).sorted) + "</p>";

function randomNumsList(numCount, randomMax) {
    let arr=[];
    let nextNum=0;
    for (let i = 0; i < numCount; i++) {
      nextNum = Math.floor(Math.random() * (randomMax));
      arr.push(nextNum);
    }
    return arr;
}

document.getElementById('result').innerHTML = out;

function sortNums(arr, ascending) {
  let swap = false;
  let pass = -1;
  let first = "";
  let done = false;
  let direction = (ascending) ? "up" : "down";
   while (done === false) {
     pass++;
     swap = false;
     for (let i = 0; i < arr.length-1; i++) {
       first = arr[i];
<<<<<<< HEAD
       if (UpDown[direction](first, arr[i+1])) {
=======
       if (operators[direction](first, arr[i+1])) {
>>>>>>> 40e66ca09add0e2c44c27985d930e0ffdefd810e
         swap = true;
         arr[i] = arr[i+1];
         arr[i+1] = first;
       }
     }
     if (swap === false) { done = true; }
   }
  return {
    sorted: arr,
    passes: pass
  }
}

function reverseOrder(arr) {
  let currentValue;
  let oppositeIndex;
  for (let i = 0; i < arr.length/2; i++) {
    currentValue = arr[i];
    oppositeIndex = arr.length - 1 - i;
    arr[i] = arr[oppositeIndex];
    arr[oppositeIndex] = currentValue;
  }
  return arr;
}