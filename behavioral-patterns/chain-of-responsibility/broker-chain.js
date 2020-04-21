// !broker chain design pattern is mostly related to observer design pattern
class Event {
  constructor() {
    this.handlers = new Map(); // hashmap
    this.count = 0;
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler);
    return this.count;
  }

  unsubscribe(idx) {
    this.handlers.delete(idx);
  }

  fire(sender, args) {
    this.handlers.forEach(function (value, key) {
      value(sender, args);
    });
  }
}

// !enumeration/enum -> Think as constants
let WhatToQuery = Object.freeze({
  attack: 1,
  defense: 2,
});

class Query {
  constructor(creatureName, whatToQuery, value) {
    this.creatureName = creatureName;
    this.whatToQuery = whatToQuery;
    this.value = value;
  }
}

// !event broker
class Game {
  constructor() {
    // queries-> event
    this.queries = new Event();
  }

  performQuery(sender, query) {
    this.queries.fire(sender, query);
  }
}

class Creature {
  constructor(game, name, attack, defense) {
    this.game = game;
    this.name = name;
    // attack and defence can be modified so-
    this.initial_attack = attack;
    this.initial_defense = defense;
  }

  get attack() {
    let q = new Query(this.name, WhatToQuery.attack, this.initial_attack);
    this.game.performQuery(this, q);
    return q.value;
  }

  get defense() {
    let q = new Query(this.name, WhatToQuery.defense, this.initial_defense);
    this.game.performQuery(this, q);
    return q.value;
  }

  toString() {
    return `${this.name}: (${this.attack}/${this.defense})`;
  }
}

// !base class
class CreatureModifier {
  constructor(game, creature) {
    this.game = game;
    this.creature = creature;
    this.token = game.queries.subscribe(this.handle.bind(this));
  }

  handle(sender, query) {
    // implement in inheritors
  }

  dispose() {
    game.queries.unsubscribe(this.token);
  }
}

class DoubleAttackModifier extends CreatureModifier {
  constructor(game, creature) {
    super(game, creature);
  }

  handle(sender, query) {
    if (
      query.creatureName === this.creature.name &&
      query.whatToQuery === WhatToQuery.attack
    ) {
      query.value *= 2;
    }
  }
}

class IncreaseDefenseModifier extends CreatureModifier {
  constructor(game, creature) {
    super(game, creature);
  }

  handle(sender, query) {
    if (
      query.creatureName === this.creature.name &&
      query.whatToQuery === WhatToQuery.defense
    ) {
      query.value += 2;
    }
  }
}

let game = new Game();
let goblin = new Creature(game, "Strong Goblin", 2, 2);
console.log(goblin.toString());

console.log("----double Attack----");
let dam = new DoubleAttackModifier(game, goblin);
console.log(goblin.toString());

console.log("------Increase the defence--------");
let idm = new IncreaseDefenseModifier(game, goblin);
console.log(goblin.toString());

console.log("------Destroying/breaking defence modifier------");
idm.dispose();

dam.dispose();
console.log(goblin.toString());
