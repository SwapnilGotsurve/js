// program of obj data which contain array of student name , marks 

data = [{ name : "swapnil", marks : 80},
        { name : "aarti", marks : 90},
        { name : "yuvraj", marks : 85},
        { name : "priya", marks : 95}]
let it = data[Symbol.iterator]();
let result = it.next();

while (!result.done) {  
    console.log(result.value);
    result = it.next();
}