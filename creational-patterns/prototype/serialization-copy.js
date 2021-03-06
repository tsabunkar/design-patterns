class Address {
  constructor(streetAddress, city, country) {
    this.streetAddress = streetAddress;
    this.city = city;
    this.country = country;
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

  toString() {
    return `${this.name} lives in ${this.address}`;
  }

  geet() {
    console.log(
      `hi, my name is ${this.name} I live at ${this.address.toString()}`
    );
  }
}

let tejas = new Person(
  'Tejas',
  new Address('Mahadevapura', 'Bangalore', 'India')
);

// thus, we had made copy of tejas object as usha object and customized it as per new
// requirements like change of name and address [thus reused]

// !THere is limitation - if we have tree like object structure (i.e- too many hasA
// !relationship) then we need to modifiy each objects -> violation of open-close principle
// ! thus, Instead of use deep copy- we will use serialize and deserialize the object.

// let usha = tejas.deepCopy();

/* 
// !Serializing by making the object stringifyed
let serializedObject = JSON.stringify(tejas);
// !deserialize by parsing the object
let deserializedObject = JSON.parse(serializedObject);
let usha = deserializedObject;

usha.name = 'Usha';
usha.address.streetAddress = 'Kormangala';

console.log(tejas);
console.log(usha);
 */

// !above solution is not prominent solution -> rather we want some sort of serializer
// !which can serialize and deserialize different data-types

class Serializer {
  constructor(types) {
    this.types = types;
  }

  markRecursive(object) {
    let idx = this.types.findIndex((t) => {
      return t.name === object.constructor.name;
    });

    if (idx !== -1) {
      object['typeIndex'] = idx;

      for (const key in object) {
        if (object.hasOwnProperty(key)) {
          const element = object[key];
          this.markRecursive(element);
        }
      }
    }
  }

  reconstructRecursive(object) {
    if (object.hasOwnProperty('typeIndex')) {
      let type = this.types[object.typeIndex];
      let obj = new type();

      for (const key in object) {
        if (object.hasOwnProperty(key) && object[key] != null) {
          obj[key] = this.reconstructRecursive(object[key]);
        }
      }

      delete obj.typeIndex;
      return obj;
    }
    return object;
  }

  // making a deep copy of the object -> will serialize and deserialize the object
  clone(object) {
    this.markRecursive(object);
    let copy = JSON.parse(JSON.stringify(object));
    return this.reconstructRecursive(copy);
  }
}

let serializer = new Serializer([Person, Address]);
let usha = serializer.clone(tejas);

usha.name = 'Usha';
usha.address.streetAddress = 'Kormangala';

console.log(tejas);
console.log(usha);
