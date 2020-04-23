// for this Stuff class we need to iterate on it
class Stuff {
  constructor() {
    this.a = 11;
    this.b = 22;
  }

  // !default iterator provided by js-> using which I m creating custom iterable
  // !inorder to iterate over this Stuff object
  [Symbol.iterator]() {
    let i = 0; // i -> counter
    let self = this;
    // return object -> which inturn Return 2 things: done and value
    return {
      // next-> function
      next: function () {
        return {
          done: i > 1, //  flag (we are done iteration when i > 1)
          value: self[i++ === 0 ? "a" : "b"], // value on which were iterating on
        };
      },
    };
  }

  // get the elements backward
  get backwards() {
    let i = 0;
    let self = this;
    return {
      next: function () {
        return {
          done: i > 1,
          value: self[i++ === 0 ? "b" : "a"],
        };
      },
      // make iterator iterable
      [Symbol.iterator]: function () {
        return this;
      },
    };
  }
}

let values = [100, 200, 300];

// !built-in iterables provided by js lang
for (let i in values) {
  console.log(`Element at pos ${i} is ${values[i]}`);
}

// !built-in iterables provided by js lang
for (let v of values) {
  console.log(`Value is ${v}`);
}

console.log("-----using custom iterable on custom class-----");
let stuff = new Stuff();
for (let item of stuff) console.log(`${item}`);

console.log("------backward iterating-------");

for (let item of stuff.backwards) console.log(`${item}`);
