interface PersonInterface {
    firstName: string;
    lastName: string;
    city?: string;
    age?: number;
  }
  
  interface extendedPerson extends PersonInterface {
    address: string;
  }
  
  type OtherPersonType = {
    name: string;
    job?: string;
    sayHello(saluto: string): string;
  };
  
  /**
   *
   * @param person
   * @returns
   */
  function greeter(person: PersonInterface): string {
    let response: string = "Hello, " + person.firstName + " " + person.lastName;
  
    if (person.city !== undefined) {
      response += " " + person.city;
    }
    if (person.age !== undefined) {
      response += " " + person.age;
    }
  
    return response;
  }
  
  let user = { firstName: "Jane", lastName: "Doe", city: "London" };
  let user2 = { firstName: "Robert", lastName: "Miles", age: 21 };
  
  const user4: PersonInterface = {
    firstName: "Joe",
    lastName: "Rush",
    city: "Dublin",
  };
  console.log("Ciao " + user.firstName);
  
  const user5: extendedPerson = {
    firstName: "Mario",
    lastName: "Bros",
    city: "Rimini",
    address: "via roma 6",
  };
  
  console.log(greeter(user));
  console.log(greeter(user2));
  console.log(greeter(user4));
  console.log(greeter(user5) + " abiti " + user5.address);
  
  const user3: OtherPersonType = {
    name: "mario",
    job: "idraulico",
    sayHello(saluto: string): string {
      return "Hello " + saluto;
    },
  };
  
  console.log(user3.sayHello(user3.name) + " il tuo mestiere è " + user3.job);
  
  /**
   * Print object and check his type
   * @param strs
   */
  function printAll(strs: string | string[] | null): void {
    if (typeof strs === "object" && strs !== null) {
      for (const s of strs) {
        console.log("ARRAY o oggetto " + s);
      }
    } else if (typeof strs === "string") {
      console.log("SONO UNA STRINGA " + strs);
    } else {
      console.log("sono null");
    }
  }
  
  const valore: string = "ciao";
  printAll(valore);
  
  const valoreMultiplo: string[] = ["uno", "due", "tre"];
  printAll(valoreMultiplo);
  
  printAll(null);
  
  type Greeting = "Hello, world";
  type ShoutyGreeting = Uppercase<Greeting>;
  
  type linguaggi = "PHP" | "JAVA" | "TYPESCRIPT";
  const myLang: linguaggi = "TYPESCRIPT";
  console.log(myLang);