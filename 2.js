// generate 1 to 100 random num 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //find square root of a number
function squareRoot(num) {
    return Math.sqrt(num);
  }
  //find max of 3 numbers
function findMax(a, b, c) {
    return Math.max(a, b, c);
  }
    console.log(getRandomInt(1, 100));
    console.log(squareRoot(16));
    console.log(findMax(10, 20, 30));