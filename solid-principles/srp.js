/**
 * !Single Responsiblity principle
 *
 *  Tells : 'a class should have only one reason to change'
 *  meaning that a class should have only one job / one responsiblity
 */

const fs = require('fs');

class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(journalText) {
    let count = ++Journal.counter;
    let entry = `${count}: ${journalText}`;
    this.entries[count] = entry; // adding a new entry as key:value pair in object
    return count;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  // to diplay/print
  toString() {
    return Object.values(this.entries).join('\n');
    //  Object.values(object1) method returns an array representation of a given object (object1)
    // this.entires object is converted to array -> Again join as string by new line '/n'
  }

  // *In future you want to load from some other file or from Url/ Save into a file then you
  // *will implement below methods, thus your adding more the one resposibility to class Journal
  // !The problem with adding second responsiblity to the class is - if we have some behaviours
  // ! (methods) which are specific to serialization then it will be very difficuit to manager
  // ? So we can create separate class for this second responsiblity ( i.e- persistenceManager)
  /* 
  saveJournalToFile(fileName) {
    fs.writeFile(fileName, this.toString());
  }
  load(fileName) {
    // --logic
  }

  loadFromUrl(url) {
    // --logic
  } 
  */
}

Journal.counter = 0;

let journal = new Journal();

journal.addEntry('I am exicited today to learn Design Patterns');
journal.addEntry('I am solving daily one competitive problem');

console.log(journal.toString());

class PersistenceManager {
  // pre-processing the jorunal - this be applied uniformally across entier PersistenceManager
  // instead of having searching classes and modifiying serialization methods
  preprocess(j) {
    // ---logic
  }

  saveToFile(journal, fileName) {
    fs.writeFileSync(fileName, journal.toString());
    console.log('Saved to file');
  }
}

let persistenceManager = new PersistenceManager();
let fileName = './save.txt';
persistenceManager.saveToFile(journal, fileName);
