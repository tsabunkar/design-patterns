class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  toString() {
    return `${this.width} x ${this.height}`;
  }
}

let rectangle = new Rectangle(2, 3);
console.log(rectangle.toString());

class Square extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

let sqaure = new Square(5);
console.log(sqaure.toString());
sqaure.width = 10;
console.log(sqaure.toString());

//-------------------------------------------

// !Above problem we were able to change the width thus Square height and width are different now
// *To solve this problem- You might  use getters and setters in Rectangle class

//-------------------------------------------

console.log(
  '-----------Using Getters and Setters to Solve the above problem--------'
);
class Rectangle1 {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }

  set width(value) {
    this._width = value;
  }

  set height(value) {
    this._height = value;
  }

  get area() {
    return this._width * this._height;
  }

  toString() {
    return `${this._width} x ${this._height}`;
  }
}

class Square1 extends Rectangle1 {
  constructor(size) {
    super(size, size);
  }

  set width(value) {
    this._width = this._height = value;
  }

  set height(value) {
    this._width = this._height = value;
  }
}

let rectangle1 = new Rectangle1(2, 3);
console.log(rectangle1.toString());

let sqaure1 = new Square1(5);
console.log(sqaure1.toString());
sqaure1.width = 10;
console.log(sqaure1.toString());

console.log(
  '*********To fail above solution of using getter and setters**********'
);

// ! Above solution will fail at one snario:-
let useIt = function (recInstance) {
  let width = recInstance._width;
  recInstance.height = 10; // Using setter to set the height value
  //  NOTE: Don't use () function notation while using getter and setter

  console.log(`Expected area of ${10 * width}, but we got ${recInstance.area}`); // using getter to get the area
};

let rectangle2 = new Rectangle1(2, 3);
useIt(rectangle2);

let sqaure2 = new Square1(5);
useIt(sqaure2); // !This usecase fails

// ? To solve this above issue of getter and setter- Use factory method
