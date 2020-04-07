class Point3 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  // If you to update cartesian using rho and theta
  // we cannot have two constructor in one class [but allowed in lang- like swift and ObjectiveC]
  /*  constructor(rho, theta) {
    this.x = rho * Math.cos(theta);
    this.y = rho * Math.sin(theta);
  } */
}

CoordinateSystem = {
  cartesian: 0,
  polar: 1,
};

class Point2 {
  constructor(a, b, cs = CoordinateSystem.cartesian) {
    switch (cs) {
      case CoordinateSystem.cartesian:
        this.x = a;
        this.y = b;
        break;
      case CoordinateSystem.polar:
        this.x = a * Math.cos(b);
        this.y = a * Math.sin(b);
        break;
    }
  }
}

// ! Problem -> naming convention of a,b is very difficuit, -> How will you deal with if new
// ! requirements arises for 3rd co-ordinate system. (if we modifiy above class its violation
// ! of open-close principle)
// * Answers is using facotry Methods - Helps to create an object, It doesnot rquire
// * to use constructor

// !Factory Method
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /*
    A static method belongs to the class rather than the object of a class.
    A static method can be invoked without the need for creating an instance of a class.
    A static method can access static data member and can change the value of it. 
    */
  /* static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  // method names and arguments names are great :)
  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(rho), theta * Math.sin(theta));
  } */

  static get factory() {
    // not singleton, return new instance everytime invoked / called
    return new PointFacotry();
  }
}

// !Moving all the static methods to separate class
class PointFacotry {
  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(rho), theta * Math.sin(theta));
  }
}

let cartesianPoint = PointFacotry.newCartesianPoint(2, 3);
console.log(cartesianPoint);

let polarPoint = PointFacotry.newPolarPoint(Math.PI / 2, -1);
console.log(polarPoint);
