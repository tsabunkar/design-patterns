# Memento Design Pattern

- A token/handle representing the system state. Lets us roll back to the state when the token was generated. May or may not directly expose state information.

---

# Motivation

- An object or system goes through changes
  - ex: bank account gets deposits and withdrawals
- There are different ways of navigating those changes.
- One way is to record every change (command) and teach a command to 'undo' itself.
- Another is to simply save snapshots of the system (Memento)
