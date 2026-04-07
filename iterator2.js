let str = "JS"
let it = str[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());