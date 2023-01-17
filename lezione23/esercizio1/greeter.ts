/**
 * Person class
 */
class Person {
  constructor(firstName: string, lastName: string, city: string = "") {
    this.firstName = firstName;
    this.lastName = lastName;
    this.city = city;
  }
  firstName: string;
  lastName: string;
  city: string | null;
}

/**
 *
 * @param person
 * @returns
 */
function greeter(person: Person) {
  console.log("dati ricevuti:" + person.firstName + " " + person.lastName);
  const divInfo = document.getElementById("peopleData");
  divInfo.innerHTML =
    "<p> <b>" + person.firstName + " " + person.lastName + "</b></p>";
}