/**
 * Person class
 */
var Person = /** @class */ (function () {
    function Person(firstName, lastName, city) {
        if (city === void 0) { city = ""; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
    }
    return Person;
}());
/**
 *
 * @param person
 * @returns
 */
function greeter(person) {
    console.log("dati ricevuti:" + person.firstName + " " + person.lastName);
    var divInfo = document.getElementById("peopleData");
    divInfo.innerHTML =
        "<p> <b>" + person.firstName + " " + person.lastName + "</b></p>";
}
