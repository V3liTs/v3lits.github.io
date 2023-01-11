const { get } = require("http");

console.log(Math.ceil(.95));
// expected output: 1

console.log(Math.ceil(4));
// expected output: 4

console.log(Math.ceil(7.004));
// expected output: 8

console.log(Math.ceil(-7.004));
// expected output: -7

console.log(Math.floor(5.95));
// expected output: 5

console.log(Math.floor(5.05));
// expected output: 5

console.log(Math.floor(5));
// expected output: 5

console.log(Math.floor(-5.05));
// expected output: -6

//Numeri casuali
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // expected output: 0
  
  console.log("Numero casuale "+ Math.random());
  // expected output: a number from 0 to <1

  function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  let minVal = 1;
  let maxVal = 100;
  console.log ("Creo numero casuale fra "+minVal+" e "+maxVal+" :"+ getRandomArbitrary(minVal,maxVal));

  console.log(Math.min(2, 3, 1,7,0));
// expected output: 1

console.log(Math.min(-2, -3, -1));
// expected output: -3

console.log(Math.max(1, 3, 2));
// expected output: 3

console.log(Math.max(-1, -3, -2));
// expected output: -1

const array1 = [9, 3, 12,81, 7, 44, 29];

console.log("Minimo valore di un array "+ Math.min(...array1));
console.log("Minimo valore di un array "+ Math.max(...array1));
// expected output: 1
  