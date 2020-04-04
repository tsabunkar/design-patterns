let Relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2,
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

// !LOW-LEVEL MODULE - this is related to storage like - storing in arrays, objects, etc
class Relationships {
  constructor() {
    this.data = [];
  }

  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child,
    });
  }
}

let parent = new Person('usha');

let child1 = new Person('tejas');
let child2 = new Person('yash');

let relationships = new Relationships();

relationships.addParentAndChild(parent, child1);
relationships.addParentAndChild(parent, child2);

// !HIGH- LEVEL MODULE - this is related to fetching/analyzing the data
class Research {
  constructor(relationships) {
    // find all the childrens of usha
    let relations = relationships.data; // accessing the data array

    for (let rel of relations.filter(
      (r) => r.from.name === 'usha' && r.type == Relationship.parent
    )) {
      console.log(`Usha has a child names : ${rel.to.name}`);
    }
  }
}

new Research(relationships);

// Dependency Inversion principle states that - high level module should never
// directly depends on low-level modules, but instead depends on abstraction classes
// or interfaces

// !===================================================================
// * ******************************************************************
// !===================================================================

// creating an abstract class in js
class RelationshipBrowser {
  constructor() {
    if (this.constructor.name === 'RelationshipBrowser') {
      throw new Error('RelationshipBrowser is abstract!');
    }
  }

  findAllChildrensOf(name) {}
}

// !LOW-LEVEL MODULE
class Relationships2 extends RelationshipBrowser {
  constructor() {
    super();
    this.data = [];
  }

  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child,
    });
  }

  findAllChildrensOf(name) {
    // find all the childrens of usha -> Logic which we were writing in High level
    // module (i.e- in Research class) is now moved to low level module itself

    return this.data
      .filter((r) => r.from.name === name && r.type == Relationship.parent)
      .map((r) => r.to);
  }
}

// !HIGH- LEVEL MODULE
class Research2 {
  constructor(browser) {
    // NOTE: here we are invoking abstract class
    for (let p of browser.findAllChildrensOf('usha')) {
      console.log(`Usha has a child names : ${p.name}`);
    }
  }
}

console.log('--------AFTER using Dependency Inversion Principle------');

let relationships2 = new Relationships2();

relationships2.addParentAndChild(parent, child1);
relationships2.addParentAndChild(parent, child2);

new Research2(relationships2);
