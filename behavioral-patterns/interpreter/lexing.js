class Integer {
  constructor(value) {
    this.value = value;
  }
}

let Operation = Object.freeze({
  addition: 0,
  subtraction: 1,
});

class BinaryOperation {
  constructor() {
    this.type = null;
    this.left = null;
    this.right = null;
  }

  get value() {
    switch (this.type) {
      case Operation.addition:
        return this.left.value + this.right.value;
      case Operation.subtraction:
        return this.left.value - this.right.value;
    }
    return 0;
  }
}

// Enums
let TokenType = Object.freeze({
  integer: 0,
  plus: 1,
  minus: 2,
  lparen: 3, // left paranthesis
  rparen: 4, // right paranthesis
});

class Token {
  constructor(type, text) {
    this.type = type;
    this.text = text;
  }

  toString() {
    return `\`${this.text}\``;
  }
}

// !lexing process
function lex(input) {
  let result = [];

  for (let i = 0; i < input.length; ++i) {
    switch (input[i]) {
      case "+": // creating tokens for each operators
        result.push(new Token(TokenType.plus, "+"));
        break;
      case "-":
        result.push(new Token(TokenType.minus, "-"));
        break;
      case "(":
        result.push(new Token(TokenType.lparen, "("));
        break;
      case ")":
        result.push(new Token(TokenType.rparen, ")"));
        break;
      default:
        let buffer = [input[i]]; // buffer will store all the digits of a number
        // parsing the number
        for (let j = i + 1; j < input.length; ++j) {
          // checking weather its digit
          if ("0123456789".includes(input[j])) {
            buffer.push(input[j]);
            ++i;
          } else {
            // when everything is done
            result.push(new Token(TokenType.integer, buffer.join("")));
            break;
          }
        }
        break;
    }
  }

  return result;
}

let input = "(13+4)-(12+1)";
let tokens = lex(input);
console.log(tokens.join("  "));
