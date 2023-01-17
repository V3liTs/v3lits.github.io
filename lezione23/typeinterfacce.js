/**
 *
 * @param person
 * @returns
 */
function greeter(person) {
    var response = "Hello, " + person.firstName + " " + person.lastName;
    if (person.city !== undefined) {
        response += " " + person.city;
    }
    if (person.age !== undefined) {
        response += " " + person.age;
    }
    return response;
}
var user = { firstName: "Jane", lastName: "Doe", city: "London" };
var user2 = { firstName: "Robert", lastName: "Miles", age: 21 };
var user4 = {
    firstName: "Joe",
    lastName: "Rush",
    city: "Dublin"
};
console.log("Ciao " + user.firstName);
var user5 = {
    firstName: "Mario",
    lastName: "Bros",
    city: "Rimini",
    address: "via roma 6"
};
console.log(greeter(user));
console.log(greeter(user2));
console.log(greeter(user4));
console.log(greeter(user5) + " abiti " + user5.address);
var user3 = {
    name: "mario",
    job: "idraulico",
    sayHello: function (saluto) {
        return "Hello " + saluto;
    }
};
console.log(user3.sayHello(user3.name) + " il tuo mestiere è " + user3.job);
/**
 * Print object and check his type
 * @param strs
 */
function printAll(strs) {
    if (typeof strs === "object" && strs !== null) {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            console.log("ARRAY o oggetto " + s);
        }
    }
    else if (typeof strs === "string") {
        console.log("SONO UNA STRINGA " + strs);
    }
    else {
        console.log("sono null");
    }
}
var valore = "ciao";
printAll(valore);
var valoreMultiplo = ["uno", "due", "tre"];
printAll(valoreMultiplo);
printAll(null);
var myLang = "TYPESCRIPT";
console.log(myLang);
