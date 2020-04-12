class VectorRenderer {
  renderCircle(radius) {
    console.log(`Drawing a circle of radius ${radius}`);
  }
}

class RasterRenderer {
  renderCircle(radius) {
    console.log(`Drawing pixles for a circle of radius ${radius}`);
  }
}

class Shape {
  constructor(renderer) {
    // !here we are bridging two hierarchy i.e- Shape and Renderer
    this.renderer = renderer;
  }
}

class Circle extends Shape {
  constructor(renderer, radius) {
    super(renderer);
    this.radius = radius;
  }

  draw() {
    this.renderer.renderCircle(this.radius);
  }

  resize(factor) {
    this.radius *= factor;
  }
}

class Square {
  // logic
}

// One hierarchy is -> Hierarchy of Shape : Sqaure, Circle, Triangle
// Second hierarchy is -> Hierarchy of Renderer : Vector, Raster, SvG,..
// Thus we try to make a bridge b/w these two hierarchies.
// !Therefore we have avoid/prevented the situtaion of 'Cartesian product' complexity
// !explosion (or) State Space Explosion i.e- having diferent combinations of classes
// !like - VectoreSqaure, VectorCircle,VectorTriangle, RasterSqaure, RasterCircle,
// !RasterTriangle, SvgSquare, etc...

let rasterRenderer = new RasterRenderer();
let vectorRenderer = new VectorRenderer();

// let circle = new Circle(vectorRenderer, 5);
let circle = new Circle(rasterRenderer, 5);

circle.draw();
circle.resize(2);
circle.draw();
