# Chain of Responsibility

- Sequence of handlers processing an event one after another.
- A chain of components who all get a chance to process a command or a query, optionally having default processing implementation and an ability to terminate the processing chain.
- Chain of responsibility can be implemented as a chain of references or a centralized construct.
- Enlist objects in the chain, possibly controlling their order/priority.
- In a linked-list implementation, one member can impede further processing.
- Support removal of objects from the chain (lifetime control)

---

# Motivation

- Unethical behavior of an employee; who takes the blame ?
  - Employee
  - Manager
  - CEO
- You click a graphical element on a form
  - Button can handle it, stop further processing
  - Underlying group box
  - Underlying window
- CCG computer game
  - Creature has attack and defense value.
  - Those can be boosted by other cards.

---

# Command Query Separation (CQS)

- Command = asking for an action or change (ex- please set your attack value to 2)
- Query = asking for information (ex- please give me your attack value)
- CQS = having separate means of sending commands and queries to ex- direct field access.

---
