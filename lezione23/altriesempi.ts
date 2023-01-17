let user: any = { userName: "Mario", userBirthYear: 1980 }; //recuperato da una chiamata

/**
 * Greet the user and show years
 * @param name
 * @param age
 */
function greet(name: string, age: number): void {
  console.log("Hello, " + name.toUpperCase() + " hai " + age + " anni.");
}

/**
 * Get the age
 * @param birthYear
 * @returns
 */
function getAge(birthYear: number): number {
  return new Date().getFullYear() - birthYear;
}

greet(user["userName"], getAge(user["userBirthYear"]));

const names: string[] = ["Alice", "Bob", "Eve"];

// Contextual typing for function
names.forEach(function (s) {
  if (typeof s === "string") {
    console.log ("stringa "+s.toUpperCase);
  }
  console.log(s);
});

/**
 * Print coordinates
 * @param pt
 */
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

/**
 * printName and lastName (if provided : last is not mandatory)
 * @param person
 */
function printName(person: { first: string; last?: string }): void {
  console.log("Name: " + person.first);
  if (typeof person.last !== "undefined") {
    console.log("Surname: " + person.last);
  }
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

/**
 * Una funzione che chiama un'altra funzione
 * @param fn
 */
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}

function printToConsole(s: string) {
  console.log(s);
}

greeter(printToConsole);

let optionalCity: string | null = null;
let optionalCountry: string | undefined = undefined;

console.log ("City "+optionalCity + " country "+optionalCountry);

if (optionalCity === null)
{
    optionalCity ="Roma";
}
if (optionalCountry === undefined)
{
    optionalCountry ="Italia";
}


console.log ("City "+optionalCity + " country "+optionalCountry);