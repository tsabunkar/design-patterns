// base class (parent class)
class Shape {
  /*  constructor(color) {
    this.color = color;
  } */
  // ! IF want to add feature color property -then could have added color prop in base
  // ! Class itself but, never modifiy base class implementation, Open-close principe
}

class Circle extends Shape {
  constructor(radius = 0) {
    super();
    this.radius = radius;
  }

  resize(factor) {
    console.log('resize', factor);
    this.radius *= factor;
  }

  toString() {
    return `A circle of radius ${this.radius}`;
  }
}

// ! Build decorator - which wraps original class and adds additional functionality/feature

class ColorShape extends Shape {
  // !Color is the feature which we want to implement without actually modifiying the base class
  constructor(shape, color) {
    super();
    this.shape = shape;
    this.color = color;
  }

  toString() {
    return `${this.shape.toString()} has the color ${this.color}`;
  }
}

class TransparentShape extends Shape {
  constructor(shape, transparency) {
    super();
    this.shape = shape;
    this.transparency = transparency;
  }
  toString() {
    return `${this.shape.toString()} has the transparency of- ${
      this.transparency * 100.0
    }%`;
  }
}

let circle = new Circle(2);
console.log(circle.toString());

let redCircle = new ColorShape(circle, 'red');

redCircle.shape.resize(4);
console.log(redCircle.toString());

// composition of multiple decorator class
let redHalfTransparentCircle = new TransparentShape(redCircle, 0.5);
console.log(redHalfTransparentCircle.toString());

// !Drawback of above code is-
// eventhough redCircle is Shape type, we can do factor it-
// redCircle.resize(4); // ! TypeError: redCircle.resize is not a function

// thus we need to do- LINE: 59 ==> redCircle.shape.resize(4);
