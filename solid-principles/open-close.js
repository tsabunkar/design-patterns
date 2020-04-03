// Since js doesnot have enums soo Object.freeze()
let Color = Object.freeze({
  red: 'Red',
  green: 'Green',
  blue: 'Blue'
});

let Size = Object.freeze({
  small: 'S',
  medium: 'M',
  large: 'L'
});

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

class ProductFilter {
  filterByColor(products, color) {
    return products.filter(p => p.color === color);
  }

  // new requirement - need to filter also by size
  filterBySize(products, size) {
    // ----Logic
  }

  // * bcoz of this new requiement -> Open-Close Principle
  // * Objects are open for extension, closed for modification
  // * meaning : objects are allowed to perform - inheritance, extends, etc..
  // * but Objects are close for modifiying/adding the exisiting methods or properties of the
  // *  existing class - based on new requirement which will come in furture point of time.

  // new requirement
  filterBySizeAndColor(products, size, color) {
    // ----Logic
  }

  // ! Thus this new requirements keep coming- which causes : STATE SPACE EXPLOSION
  // ! meaning : this requirement list will be keep coming in future point of time like
  // ! filtBySizeOrColor, etc.. ==> Thus define separate class for that specification/requiement
  // ! as ColorSpecification and SizeSpecification
}

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];

let productFilter = new ProductFilter();

// !filter all the above products by green color
console.log(`Green products (old):`);
for (let p of productFilter.filterByColor(products, Color.green))
  console.log(`* ${p.name} is ${Color.green}`);

// *==============================================
// !==============================================
// *==============================================

// Creating separate class for color specification
class ColorSpecification {
  constructor(color) {
    this.color = color;
  }

  // this method check weather it satisfiy whatever criteria is asked for
  isSatisfied(item) {
    return item.color === this.color;
  }
}

// Creating separate class for size specification
class SizeSpecification {
  constructor(size) {
    this.size = size;
  }

  // this method check weather it satisfiy whatever criteria is asked for
  isSatisfied(item) {
    return item.size === this.size;
  }
}

//!Thus color specification is differentiated from Size specification

class BetterFilter {
  filter(items, spec) {
    return items.filter(x => spec.isSatisfied(x));
  }
}

let betterFilter = new BetterFilter();

// !filter all the above products by green color using new approach
console.log(`Green products (new approach by open-close):`);
for (let p of betterFilter.filter(
  products,
  new ColorSpecification(Color.green)
))
  console.log(`* ${p.name} is ${Color.green}`);

console.log('-- Similarly for size specification/requirement --');

for (let p of betterFilter.filter(products, new SizeSpecification(Size.large)))
  console.log(`* ${p.name} is ${Size.large}`);

// ! If you have requirement for sizeAndColor with this new apporach built a -> Combinator
// !this class itself is specification which will combine other specification/requirement

class AndSpecification {
  constructor(...specs) {
    this.specs = specs;
  }

  // this every will make sure all the specification is statisified
  isSatisfied(item) {
    return this.specs.every(x => x.isSatisfied(item));
  }
}

console.log(`Large and green products : `);

let spec = new AndSpecification(
  new ColorSpecification(Color.green),
  new SizeSpecification(Size.large)
);

for (let p of betterFilter.filter(products, spec))
  console.log(`* ${p.name} is color : ${Color.green} and size : ${Size.large}`);

// ?-----------------------------------------------

// !In js there is no abstract class - but you can force in your constructor
class Specification {
  constructor() {
    if (this.constructor.name === 'Specification')
      throw new Error('Specification is abstract bro!');
  }

  // specifiying the abstract method which should be overridden by class who extends it

  isSatisfied(item) {}
}
