
// 1. match a string
let exp = "123abc456def789ghi";

//2. get the number from the string
console.log(exp.match(/\d+/));

//3. get only the characters from the string
console.log(exp.match(/[a-z]+/g));


//4. Check if string contains only numbers
let num = "12345";
console.log(/^\d+$/.test(num));
// true


//5. Validate Email (Basic)
let email = "abc@gmail.com";
let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
console.log(pattern.test(email));
// true


//6. Password Validation
let password = "Abcd1234";
let pattern1 = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
console.log(pattern1.test(password));
// true


// ===============================
// Pattern	Meaning
// ============================

// \d	Digit (0–9)
// \D	Not digit
// \w	Word character
// \W	Not word
// \s	Whitespace
// \S	Not whitespace


// ============ methods in regex ===============


// test()	RegExp	true/false
// exec()	RegExp	match details
// match()	String	matched array
// matchAll()	String	iterator
// replace()	String	new string
// replaceAll()	String	new string
// search()	String	index
// split()	String	array