// find duplicate elements without function
let arr = [1, 2, 3, 4, 5, 2, 3];
let duplicates = [];        
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            duplicates.push(arr[i]);
        }
    }   
}
console.log(duplicates); // Output: [2, 3]
