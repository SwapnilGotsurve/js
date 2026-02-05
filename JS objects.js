// ===========date object==================

let d = new Date();



console.log(d.getDate());      // Day → 5
console.log(d.getMonth());    // Month → 1 (0 = Jan, 1 = Feb)
console.log(d.getFullYear()); // Year → 2026
console.log(d.getHours());   // Hours → 14
console.log(d.getMinutes()); // Minutes → 30
console.log(d.getSeconds()); // Seconds → 45

let today = new Date();
console.log(today);

// ===============string object===============
let str = "Hello, World!";

console.log(str.length);    // Length → 13
console.log(str.toUpperCase()); // Uppercase → "HELLO, WORLD!"
console.log(str.toLowerCase()); // Lowercase → "hello, world!"
console.log(str.includes("World")); // Includes "World" → true
console.log(str.indexOf("o")); // Index of "o" → 4
console.log(str.slice(0, 5)); // Slice "Hello" → "Hello"


// ===============array object==================
let arr = [1, 2, 3, 4, 5];

console.log(arr.length); // Length → 5
console.log(arr[0]); // First element → 1
console.log(arr[arr.length - 1]); // Last element → 5
arr.push(6); // Add 6 to the end
console.log(arr);
arr.pop(); // Remove last element
console.log(arr);
arr.unshift(0); // Add 0 to the beginning
console.log(arr);
arr.shift(); // Remove first element
console.log(arr);
