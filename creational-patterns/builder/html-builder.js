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
