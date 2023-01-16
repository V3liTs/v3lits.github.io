let message: string = "Ciao mondo sono TS!";
console.log(message);

//Esempio funzione
function addNumbers(a: number, b: number) {
  return a + b;
}

let sum: number = addNumbers(10, 15);
console.log("Sum of the two numbers is: " + sum);

//Condizionali
let x: number = 10,
  y: number = 11;
if (x < y) {
  console.log("x is less than y");
} else if (x == y) {
  console.log("x is equal to y");
} else {
  console.log("x is less than or equal to y.");
}

//operatore ternario
x > y
  ? console.log("x is greater than y.")
  : console.log("x is less than or equal to y.");

let day: number = 4;
switch (day) {
  case 0:
    console.log("It is a Sunday.");
    break;
  case 1:
    console.log("It is a Monday.");
    break;
  case 2:
    console.log("It is a Tuesday.");
    break;
  case 3:
    console.log("It is a Wednesday.");
    break;
  case 4:
    console.log("It is a Thursday.");
    break;
  case 5:
    console.log("It is a Friday.");
    break;
  case 6:
    console.log("It is a Saturday.");
    break;
  default:
    console.log("No such day exists!");
    break;
}

let xm: number = 10,
  ym = 5;

switch (xm - ym) {
  case 0:
    console.log("Result: 0");
    break;
  case 5:
    console.log("Result: 5");
    break;
  case 10:
    console.log("Result: 10");
    break;
}

//cicli
for (let i = 0; i < 3; i++) {
  console.log("Block statement execution no." + i);
}

let arr = [10, 20, 30, 40];
for (let val of arr) {
  console.log(val); // prints values: 10, 20, 30, 40
}

for (let index in arr) {
  console.log(index); // prints indexes: 0, 1, 2, 3
  console.log(arr[index]); // prints elements: 10, 20, 30, 40
}

for (let index1 in arr) {
  console.log(index1); // prints indexes: 0, 1, 2, 3
}

let i: number = 2;

while (i < 4) {
  console.log("Block statement execution no." + i);
  i++;
}

i = 2;
do {
  console.log("Block statement execution no." + i);
  i++;
} while (i < 4);