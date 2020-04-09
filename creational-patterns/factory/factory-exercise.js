/**
 *
 * You are given a class called Person. The person has two fields: id and name.
 *
 * Please implement a PersonFactory that has a non-static createPerson() method that takes
 * a person's name and returns a person initialized with this name and an id.
 *
 * The id of the person should hbe set as a 0-based index of the object any instance of
 * PersonFactory has created. So the first person any facotry makes should have id =0,
 * second id =1 and so on
 *
 */

class Person {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class PersonFactory {
  createPerson(name) {
    // todo
  }
}
