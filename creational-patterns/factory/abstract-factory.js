const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class HotDrink {
  consume() {}
}

class Tea extends HotDrink {
  consume() {
    console.log("This tea is nice with lemon");
  }
}

class Coffee extends HotDrink {
  consume() {
    console.log("This coffee is good while coding");
  }
}

class HotDrinkFactory {
  prepare(amount) {
    // abstract method
  }
}

class TeaFactory extends HotDrinkFactory {
  prepare(amount) {
    console.log(`put in tea bag, boil water, pour ${amount}ml`);
    return new Tea();
  }
}

class CoffeeFactory extends HotDrinkFactory {
  prepare(amount) {
    console.log(`put in coffee beans, add milk, pour ${amount}ml`);
    return new Coffee();
  }
}

// enumeration
let AvailableDrink = Object.freeze({
  coffee: CoffeeFactory,
  tea: TeaFactory,
});

class HotDrinkMachine {
  constructor() {
    // keys are -coffee, tea and values are instances of CoffeFactory and TeaFactory
    this.factories = {};

    for (let drink in AvailableDrink) {
      this.factories[drink] = new AvailableDrink[drink]();
    }
  }

  interact(consumer) {
    rl.question("Select the drink and amount ? [ex- tea 50]", (answer) => {
      let parts = answer.split(" ");
      let name = parts[0];
      let amount = parseInt(parts[1]);
      let d = this.factories[name].prepare(amount);
      rl.close();
      consumer(d);
    });
  }

  makeDrink(type) {
    switch (type) {
      case "tea":
        return new TeaFactory().prepare(200);

      case "coffee":
        return new CoffeeFactory().prepare(50);

      default:
        throw new Error("Please specifiy tea or coffee");
    }
  }
}

let machine = new HotDrinkMachine();
/* rl.question("which drink ? ", function (answer) {
  let drink = machine.makeDrink(answer);
  drink.consume();

  rl.close();
}); */

// !instead of using oldschools -> makeDrink() method lets use new way
machine.interact((drink) => {
  drink.consume();
});
