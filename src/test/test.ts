
interface Person {
  firstName: string,
  lastName: string
}

class Person {
  firstName: string;
  lastName: string;
  constructor(public fName: string, public lName: string ) {
    this.firstName = fName;
    this.lastName = lName;
  }
}

function greeter(person: Person) {
  return(`Hello ${person.firstName} ${person.lastName}`);
}

let user = new Person("Justin", "Pinner");

console.log(greeter(user));

