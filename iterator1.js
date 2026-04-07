function myIterator(arr) {
  let index = 0;

  return {
    next: function () {
      if (index < arr.length) {
        return { value: arr[index++], done: false };
      } else {
        return { done: true };
      }
    }
  };
}

const it = myIterator([10, 20, 30]);

console.log(it.next()); // { value: 10, done: false }
console.log(it.next()); // { value: 20, done: false }
console.log(it.next()); // { value: 30, done: false }
console.log(it.next()); // { done: true }