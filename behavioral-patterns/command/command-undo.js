class BankAccount {
  // starting balance
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited ${amount}, balance is now ${this.balance}`);
  }

  withdraw(amount) {
    if (this.balance - amount >= BankAccount.overdraftLimit) {
      this.balance -= amount;
      console.log(`Withdrew ${amount}, balance is now ${this.balance}`);
      return true;
    }
    return false;
  }

  toString() {
    return `Balance: ${this.balance}`;
  }
}

// we can withdraw upto -500 (lowest threshold)
BankAccount.overdraftLimit = -500;

let ba = new BankAccount(100); // opening back account with 100 dollars
ba.deposit(100); // depositing 100 dollars in our bank account
console.log(ba.toString());

// Enum's
let Action = Object.freeze({
  deposit: 1,
  withdraw: 2,
});

// Command design pattern
// !Action is encpasulated in separate class
class BankAccountCommand {
  constructor(account, action, amount) {
    this.account = account;
    this.action = action;
    this.amount = amount;
    this.succeeded = false; // this flag is used to make sure we are not withdrawing beyond limit
  }

  call() {
    switch (this.action) {
      case Action.deposit:
        this.account.deposit(this.amount);
        this.succeeded = true; // deposite will always be succeeded
        break;
      case Action.withdraw:
        this.succeeded = this.account.withdraw(this.amount); // succeeded will be false when
        // user try to withdraw beyond overdraftLimit
        break;
    }
  }

  // !rollback the Action/operation which was previously performed (reverse to previous state)
  undo() {
    // if operations didn't succeeded ( we will not do rollback operations also)
    if (!this.succeeded) return;
    switch (this.action) {
      case Action.deposit:
        this.account.withdraw(this.amount);
        break;
      case Action.withdraw:
        this.account.deposit(this.amount);
        break;
    }
  }
}

console.log("---------Using Bank Account Command---------");
let cmd = new BankAccountCommand(ba, Action.deposit, 50);
cmd.call();
console.log(ba.toString());

console.log("---------Performing undo operation------------------");
cmd.undo();
console.log(ba.toString());
