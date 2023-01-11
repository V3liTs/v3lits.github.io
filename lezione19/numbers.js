console.log ("Tipi di numeri e conversioni");
let myNum = 101.3;
let myVar = "lettera";

console.log (Number.parseInt(myNum));
console.log (Number.parseInt(myVar));
console.log ("sono un intero "+ Number.isInteger(Number.parseInt(myNum)));

console.log (Number.parseFloat(myNum));
console.log (Number.parseFloat(myVar));

console.log ("NaN?" + Number.isNaN(Number.parseFloat(myVar)));

console.log(Number.isFinite(1 / 0));
// expected output: false

console.log(Number.isFinite(10 / 5));
// expected output: true

console.log(Number.isFinite(0 / 0));
