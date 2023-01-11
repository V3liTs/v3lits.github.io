console.log("LE STRINGHE");

function areEqualCaseInsensitive(str1, str2) {
  return str1.toUpperCase() === str2.toUpperCase();
}

function areEqualCaseInsensitiveLow(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

function areIdentical(str1, str2) {
  return str1 === str2;
}

const myName = "Joe";
const string1 = "A string primitive";
const string2 = "Also a string primitive";
const string3 = `Yet another string primitive`;

console.log(`Hello ${myName}`);

console.log(string1 + "\n" + string2 + "\n" + string3);

const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

const var1 = "MArio";
const var2 = "mAriO";

console.log(
  `${var1} e ${var2} sono uguali se non considero il case (up)? ` +
    areEqualCaseInsensitive(var1, var2)
);

console.log(
  `${var1} e ${var2} sono uguali se non considero il case (low)? ` +
    areEqualCaseInsensitiveLow(var1, var2)
);

console.log(`${var1} e ${var2} sono identiche? ` + areIdentical(var1, var2));

let str1 = "Hello";
const str2 = "World";

console.log(str1.concat(" ", str2));
console.log(str1.concat(str2));

str1 = "Cats are the best!";

console.log("Finisce con best! ? " + str1.endsWith("best!"));
console.log("Inizia con Cats? " + str1.startsWith("Cats"));

const sentence =
  "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";

console.log("ANALIZZO LA FRASE :\n" + sentence);

const word = "fox";
const word2 = "foxy";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is NOT"
  } in the sentence`
);
console.log(
  `The word "${word2}" ${
    sentence.includes(word2) ? "is" : "is NOT"
  } in the sentence`
);

const searchTerm = "dog";
const indexOfFirst = sentence.indexOf(searchTerm);

console.log(
  `The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`
);

console.log(
  `The index of the 2nd "${searchTerm}" is ${sentence.indexOf(
    searchTerm,
    indexOfFirst + 1
  )}`
);

console.log(
  `The index of the first "${searchTerm}" from the END is ${sentence.lastIndexOf(
    searchTerm
  )}`
);

console.log("Porzione 1 " + sentence.slice(31));
// expected output: "the lazy dog."

console.log("Porzione 2 " + sentence.slice(4, 19));

console.log("Porzione 3 " + sentence.slice(-4));
// expected output: "dog."

console.log("Porzione 4 " + sentence.slice(-9, -5));
// expected output: "lazy"

const words = sentence.split(" ");
console.log("Creo un array con le parole contenute:");

words.forEach((parola) => {
  console.log(parola);
});

const str = "Mozilla";
console.log(str.substring(1, 3));
// expected output: "oz"

//REGEX

let regex = /[A-Z]/g;
const found = sentence.match(regex);
console.log("trova regex " + found);

regex = /[^\w\s]/g;

console.log(sentence.search(regex));