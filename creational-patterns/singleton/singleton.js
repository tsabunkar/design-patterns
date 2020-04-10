class Singleton {
  constructor() {
    const instance = this.constructor.instance;
    if (instance) {
      // previous instance there, return that only
      console.log('Did I call onces ?');
      return instance;
    }

    // creating new instance
    this.constructor.instance = this;
  }
}

// return the same instance everytime someone instantiate.

let s1 = new Singleton();
let s2 = new Singleton();

console.log(s1 === s2);
