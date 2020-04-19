class FormattedText {
  constructor(plainText) {
    this.plainText = plainText;
    // all the elem in the array would be false
    this.caps = new Array(plainText.length).map(() => false);
  }

  // want to capitalize certain characters in the string
  captialize(start, end) {
    for (let i = start; i < end; ++i) {
      this.caps[i] = true; // make those elem true-> indicating : captial elements/charac's
    }
  }

  toString() {
    let buffer = [];
    // plainText -> string/sentence
    for (const charac in this.plainText) {
      let c = this.plainText[charac];
      // check if those character elements are true inside caps array
      buffer.push(this.caps[charac] === true ? c.toUpperCase() : c);
    }
    return buffer.join('');
  }
}

const text = `This is a brave new world`;
let formattedText = new FormattedText(text);
formattedText.captialize(10, 15);
console.log(formattedText.toString());

// Above approach we have captilize the text where it was required, but we have wasted
// to much of space complexity
// ! To solve above problem - flyweight design pattern

class TextRange {
  constructor(start, end) {
    this.start = start;
    this.end = end;
    this.captialize = false;
  }

  covers(position) {
    return position >= this.start && position <= this.end;
  }
}

class BetterFormattedText {
  constructor(plainText) {
    this.plainText = plainText;
    this.formatting = [];
  }

  getRange(start, end) {
    let range = new TextRange(start, end);
    this.formatting.push(range);
    return range;
  }

  toString() {
    let buffer = [];
    for (let charac in this.plainText) {
      let c = this.plainText[charac];
      for (let range of this.formatting) {
        // if character is b/w start and end of the TextRange-> then captilize
        if (range.covers(charac) && range.captialize) c = c.toUpperCase();
      }

      buffer.push(c);
    }
    return buffer.join('');
  }
}

let betterFormattedText = new BetterFormattedText(text);
betterFormattedText.getRange(16, 19).captialize = true;
console.log(betterFormattedText.toString());
