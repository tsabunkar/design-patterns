const hello = 'hello';
let html = [];

html.push('<p>');
html.push(hello);
html.push('</p>');

console.log(html.join(''));

console.log('-----------------');

const words = ['hello', 'world'];
html = [];
html.push('<ul>\n');
for (const iterator of words) {
  html.push(` <li>${iterator}</li>\n`);
}
html.push('</ul>');

console.log(html.join(''));

// As the new requirement arise to use html elements, things become much complicated

console.log('********* using builder design pattern **********');
class Tag {
  static get indentSize() {
    return 2;
  }

  constructor(name = '', text = '') {
    this.name = name;
    this.text = text;
    this.children = [];
  }

  toStringImpl(indent) {
    let html = [];
    let i = ' '.repeat(indent * Tag.indentSize);
    html.push(`${i}<${this.name}>\n`);
    if (this.text.length > 0) {
      html.push(' '.repeat(Tag.indentSize * (indent + 1)));
      html.push(this.text);
      html.push('\n');
    }

    for (let child of this.children) html.push(child.toStringImpl(indent + 1));

    html.push(`${i}</${this.name}>\n`);
    return html.join();
  }

  toString() {
    return this.toStringImpl(0);
  }

  static create(name) {
    return new HtmlBuilder(name);
  }
}

// !using builder design patterns
class HtmlBuilder {
  constructor(rootName) {
    this.rootTag = new Tag(rootName);
    this.rootName = rootName;
  }

  addChild(childName, childText) {
    let childTag = new Tag(childName, childText);
    this.rootTag.children.push(childTag);
  }

  toString() {
    return this.rootTag.toString();
  }

  build() {
    return this.rootTag;
  }

  clear() {
    this.rootTag = new Tag(this.rootName);
  }

  addChildFluent(childName, childText) {
    let childTag = new Tag(childName, childText);
    this.rootTag.children.push(childTag);
    return this;
  }
}

/* let builder = new HtmlBuilder('ul');
const newWords = ['using', 'builder', 'approach'];
for (let word of words) builder.addChild('li', word);
console.log(builder.rootTag.toString());
 */

// ! using static method create()
let builder = Tag.create('ul');
const newWords = ['using', 'builder', 'approach'];
for (let word of words) builder.addChild('li', word);
console.log(builder.rootTag.toString());

builder.clear();
builder
  .addChildFluent('li', 'foo')
  .addChildFluent('li', 'bar')
  .addChildFluent('li', 'baz');

console.log(builder.toString());
