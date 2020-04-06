/**
 *
 * let cb = new CodeBuilder('Person');
 * cb.addField('name').addField('age');
 * console.log(cb.toString());
 *
 * This codeBuilder will give the output as :
 *
 * class Person{
 *  constructor(name, age){
 *      this.name = name;
 *      this.age = age;
 *   }
 * }
 *
 */

class CodeBuilder {
  constructor(className) {
    // todo
    this.className = className;
    this.constructorClass = {};
  }

  addField(name) {
    // todo
    // reminder: we want a fluent interface
    this.constructorClass[name] = name;
    return this;
  }

  toString() {
    // todo
    if (this.className) {
      console.log(`class ${this.className} { `);
      if (Object.keys(this.constructorClass).length !== 0) {
        console.log(
          `constructor(${Object.keys(this.constructorClass).join(',')}) {`
        );
        for (const property in this.constructorClass)
          console.log(
            `this.${this.constructorClass[property]} : ${this.constructorClass[property]}`
          );

        console.log('   }');
      }
      console.log('}');
    }
  }
}

let cb = new CodeBuilder('Person');
cb.addField('name').addField('age');
console.log(cb.toString());
