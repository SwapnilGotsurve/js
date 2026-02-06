// create a shallow copy of object and change the property
let originalObj = {
    name: "Alice",
    age: 30,
    city: "New York"
};


// Create a shallow copy using Object.assign
let shallowCopyObj = Object.assign({}, originalObj);
// Change a property in the shallow copy
shallowCopyObj.age = 31;    


let shallowCopyObj2 = originalObj;
// Change a property in the second shallow copy
shallowCopyObj2.city = "Los Angeles";

console.log("Original Object:", originalObj);
console.log("Shallow Copy Object 1:", shallowCopyObj);
console.log("Shallow Copy Object 2:", shallowCopyObj2);