// another way of implementing singleton

class ChiefExecutiveOfficer {
  get name() {
    return ChiefExecutiveOfficer._name;
  }

  set name(value) {
    ChiefExecutiveOfficer._name = value;
  }

  get age() {
    return ChiefExecutiveOfficer._age;
  }

  set age(value) {
    ChiefExecutiveOfficer._age = value;
  }

  toString() {
    return `CEO name is :${this.name} and he is ${this.age} year old.`;
  }
}

// _properties are private -> not supposed to be consumed directly
ChiefExecutiveOfficer._age = undefined;
ChiefExecutiveOfficer._name = undefined;

let ceo = new ChiefExecutiveOfficer();
ceo.name = 'Tejas Sabunkar';
ceo.age = 26;

let ceo2 = new ChiefExecutiveOfficer();
ceo2.name = 'Rani Sabunkar';
ceo.age = 24;

console.log(ceo.toString());
console.log(ceo2.toString());
