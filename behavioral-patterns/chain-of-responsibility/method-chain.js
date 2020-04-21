class Creature {
  constructor(name, attack, defense) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
  }

  toString() {
    return `${this.name} (${this.attack}/${this.defense})`;
  }
}

// !Base class for creatue modifier
class CreatureModifier {
  constructor(creature) {
    this.creature = creature;
    this.next = null; // next -> is modifier which reference/points to next sequence of modifier
    // creature modifier -> Acts as Linked List
  }

  add(modifier) {
    if (this.next) this.next.add(modifier);
    else this.next = modifier;
  }

  handle() {
    if (this.next) this.next.handle();
  }
}

class DoubleAttackModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    console.log(`Doubling ${this.creature.name}'s attack`);
    this.creature.attack *= 2;
    super.handle(); // call the base class and we would traversing the complete linked list
  }
}

class IncreaseDefenseModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    if (this.creature.attack <= 2) {
      console.log(`Increasing ${this.creature.name}'s defense`);
      this.creature.defense++;
    }
    super.handle();
  }
}

class NoBonusesModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    console.log("disabling all the below respoonsbilities");
  }
}

let goblin = new Creature("Goblin", 1, 1);
console.log(goblin.toString());

let root = new CreatureModifier(goblin);

// root.add(new NoBonusesModifier(goblin)); //! we can disable all below respoonsbility by invoking
//! this no bonous modifier (Uncomment)

root.add(new DoubleAttackModifier(goblin));
root.add(new DoubleAttackModifier(goblin));

root.add(new IncreaseDefenseModifier(goblin));

// eventually...
root.handle(); // applies all the modifiers
console.log(goblin.toString());
