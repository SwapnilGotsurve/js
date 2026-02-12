// check whether the java word is present in given str in or not 

let exp = "java is a programming language";
let pattern = /java/;
console.log((pattern.test(exp)));// true

// replace java with python in the given string
let newExp = exp.replace(/java/g, "python");
console.log(newExp); // python is a programming language

// check wheather str contain only nums or not 
let num = "12345";
console.log(/^\d+$/.test(num)); // true
