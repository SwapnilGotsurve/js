// accept the input form user using switch case and perform add, factorial, print table,


// n = 3;

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter a number (1 to 3): ", function (n) {

switch (n) {
  case 1:
    n1 = 20;
    n2 = 40;
    console.log("total= ", n1 + n2);
    break;
  case 2:
    num = 5;
    fact = 1;

    for (i = 1; i <= num; i++) {
      fact *= i;
    }
    console.log("Factorial =", fact);
    break;

    case 3:
        num2 = 5
        for(i=1;i<=10;i++){
            console.log(i*num2)
        }
    break;
}
});