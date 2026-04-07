let a = [1, 2, 3, 4, 5];
let it = a[Symbol.iterator]();

let result = it.next();

while (!result.done) {
  console.log(result.value);
  result = it.next();
}

