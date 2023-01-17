var user = { userName: "Mario", userBirthYear: 1980 }; //recuperato da una chiamata
/**
 * Greet the user and show years
 * @param name
 * @param age
 */
function greet(name, age) {
    console.log("Hello, " + name.toUpperCase() + " hai " + age + " anni.");
}
/**
 * Get the age
 * @param birthYear
 * @returns
 */
function getAge(birthYear) {
    return new Date().getFullYear() - birthYear;
}
greet(user["userName"], getAge(user["userBirthYear"]));
var names = ["Alice", "Bob", "Eve"];
// Contextual typing for function
names.forEach(function (s) {
    if (typeof s === "string") {
        console.log("stringa " + s.toUpperCase);
    }
    console.log(s);
});
/**
 * Print coordinates
 * @param pt
 */
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });
/**
 * printName and lastName (if provided : last is not mandatory)
 * @param person
 */
function printName(person) {
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
function greeter(fn) {
    fn("Hello, World");
}
function printToConsole(s) {
    console.log(s);
}
greeter(printToConsole);
var optionalCity = null;
var optionalCountry = undefined;
console.log("City " + optionalCity + " country " + optionalCountry);
if (optionalCity === null) {
    optionalCity = "Roma";
}
if (optionalCountry === undefined) {
    optionalCountry = "Italia";
}
console.log("City " + optionalCity + " country " + optionalCountry);
