class Address {
  constructor(streetAddress, city, country) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
  }

  deepCopy() {
    return new Address(this.streetAddress, this.city, this.country);
  }

  toString() {
    return `Address : ${this.streetAddress}, ${this.city}, ${this.country}`;
  }
}

class Person {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  deepCopy() {
    return new Person(this.name, this.address.deepCopy());
  }

  toString() {
    return `${this.name} lives in ${this.address}`;
  }
}

let tejas = new Person(
  "Tejas",
  new Address("Mahadevapura", "Bangalore", "India")
);

// without modifiying exisiting class, we want to add/modifiy some of the properties/behaviour
// of existing class

// explict copy of tejas object to usha object
// let usha = tejas; // !NOTE: both this variable will refer to the same memory address

// now lets modifiy

/* usha.name = "Usha";
usha.address.streetAddress = "Kormangala";

console.log(tejas);
console.log(usha); */

// ! inorder to refer both tejas and usha variables to different memory address ->
// ! Copying Explicitly or copying wholesale (deepCopy)

let usha = tejas.deepCopy();

usha.name = "Usha";
usha.address.streetAddress = "Kormangala";

console.log(tejas);
console.log(usha);

// thus, we had made copy of tejas object as usha object and customized it as per new
// requirements like change of name and address [thus reused]

// !THere is limitation - if we have tree like object structure (i.e- too many hasA
// !relationship) then we need to modifiy each objects -> violation of open-close principle
