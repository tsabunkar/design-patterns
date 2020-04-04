class Document {}

// !making machine class as abastract class in js
class Machine {
  constructor() {
    if (this.constructor.name === 'Machine') {
      throw new Error('Machine is abstract class!!');
    }
  }

  print(doc) {}
  fax(doc) {}
  scan(doc) {}
}

class MultifunctionPrinter extends Machine {
  print(doc) {}

  fax(doc) {}

  scan(doc) {}
}

class OldFashionedPrinter extends Machine {
  print(doc) {
    // ok
  }

  fax(doc) {
    // do nothing
    // IF this overriden method has no logic at all then -> It breaks/violate : (PLS)
    //  principle of least suprise
  }

  scan(doc) {
    // throw new Error('not implemented');
    throw new NotImplementedError('oldFashionedPrinter.scan');
  }
}

class NotImplementedError extends Error {
  constructor(name) {
    let msg = `${name} is not implemented bro!!`;
    super(msg);
    if (Error.captureStackTrace)
      Error.captureStackTrace(this, NotImplementedError);
  }
}

let printer = new OldFashionedPrinter();
printer.scan();

// Above approaches - leaving method blanks or throw exception- neither approaches are
// good approaches so, to solve this problem we have ISP which: We have to segragte
// or split-up interfaces into different parts so that client/users don't implement
// more than what they need.

class Printer {
  constructor() {
    if (this.constructor.name === 'Printer') {
      throw new Error('Printer is abstract class!!');
    }
  }

  print() {}
}

class Scanner {
  constructor() {
    if (this.constructor.name === 'Scanner') {
      throw new Error('Scanner is abstract class!!');
    }
  }

  scan() {}
}

// !we cannot use for multiple inheritance
// class PhotoCopier extends Printer, Scanner{
class PhotoCopier extends aggregation(Printer, Scanner) {
  print() {}
  scan() {}
}

// Create aggregation -> using mixings
