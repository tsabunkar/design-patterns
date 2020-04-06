class Person {
  constructor() {
    // address info
    this.streetAddress = this.postCode = this.city = '';

    // employemnt info
    this.companyName = this.position = '';

    this.annualIncome = 0;
  }

  toString() {
    return (
      `Person lives at ${this.streetAddress}, ${this.city}, ${this.postcode}\n` +
      `and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`
    );
  }
}

// lets create two sepearate builders which will also interact with one another builders
class PersonBuilder {
  constructor(person = new Person()) {
    this.person = person;
  }

  get lives() {
    return new PersonAddressBuilder(this.person);
  }

  get works() {
    return new PersonJobBuilder(this.person);
  }

  build() {
    return this.person;
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person) {
    super(person); // call the base constructor ->  PersonBuilder
  }

  at(companyName) {
    this.person.companyName = companyName;
    return this;
  }

  asA(position) {
    this.person.position = position;
    return this;
  }

  earning(annualIncome) {
    this.person.annualIncome = annualIncome;
    return this;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person) {
    super(person); // call the base constructor ->  PersonBuilder
  }

  at(streetAddress) {
    this.person.streetAddress = streetAddress;
    return this;
  }

  withPostcode(postcode) {
    this.person.postcode = postcode;
    return this;
  }

  in(city) {
    this.person.city = city;
    return this;
  }
}

let personBuilder = new PersonBuilder();
let person = personBuilder.lives
  .at('Bengaluru')
  .in('India')
  .withPostcode('560048')
  .works.at('Airbus')
  .asA('Software Enginner')
  .earning(100)
  .build();

console.log(person.toString());
