# S.O.L.I.D stands for:

- S - Single-responsiblity principle.
- O - Open-closed principle.
- L - Liskov substitution principle.
- I - Interface segregation principle.
- D - Dependency Inversion Principle.

---

# SOLID principles

- Design principles introduced by Robet C Martin
- Frequently references in Design Pattern literature.

---

# Single Responsiblity principle

- Tells : 'a class should have only one reason to change'
- meaning that a class should have only one job / one responsiblity
- refer : ./srp.js
- Single Responsibility Principle --> Antipattern is God Object. [Thus, SRP recommends to if a class is having more than one responsibilities then just create a new class which can manage those responsibilities]
- SRP supports ==> Separation Of Concerns (divide a a huge code to small part which are related)

---

# Open Close Principle

- Objects are open for extension, closed for modification
- meaning : objects are allowed to perform - inheritance, extends, etc.. but Objects are close for modifiying/adding the exisiting methods or properties of the existing class - based on new requirement which will come in furture point of time.
- Exisiting class should not be modified (i.e- writing a patch code to incorporate patch logic for particularly new requirement/specification bcoz- this new requirements/spec will ke adding infinitely in future point time)
- Better approach is using inhertance, or some sort of extending the functionality

---

# Liskov Substitution Principle

- Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it.
- LSP says- if we have a function which takes base class, then this function should be able to take derived class without breaking the functionality
- Ex- useIt() function which take instance of Base class- Rectangle class works fine, but when useIt() take the instance of derived class - Square Class(which had extended from base class- Rectangle) functionality fails.

---

# Interface segregation principle (ISP)

- js doesnot have interfaces :)
- we can make use the normal class as interface by checking the constructor name
- ISP: no client should be forced to depend on methods it does not use.
- ISP splits interfaces that are very large into smaller and more specific ones so that clients will only have to know about the methods that are of interest to them. Such shrunken interfaces are also called role interfaces.
- ISP states: We have to segragte or split-up interfaces into different parts so that client/users don't implement more than what they need.
- ISP is intended to keep a system decoupled and thus easier to refactor, change, and redeploy.
- ISP similar to the High Cohesion Principle of GRASP(General Responsibility Assignment Software Patterns)

---

# Dependency Inversion Principle

- Dependency Inversion principle is not related to Dependency Injection :)
- states that :
  - A. High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g. interfaces).
  - B. Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.
- dependency inversion principle is a specific form of decoupling software modules
- This will help for decoupling and helps in refacotring when requirement changes in future

---

# Principle of Least Suprise or Principle of Least Astonishment

- This principle applies to: applies to user interface and software design
- It States : In interface design, always do the least surprising thing.
- the principle means that a component of a system should behave in a way that most users will expect it to behave; the behavior should not astonish or surprise users.

---

# Summary

- Single Responsibility Principle
  - A class should only have one reason to change.
  - Separation of concerns - different classes handling different, independent tasks/problems
- Open-Closed Principle
  - Classes should be open for extension but closed for modification
- Liskov Substition Principle
  - You should be able to substitute a base type for a subtype
- Interface Segregation Principle
  - Don't put too much into an interface; split into spearate interfaces
  - YAGNI- Your Ain't Going to Need it
- Dependency Inversion Principle
  - High-level modules should not depend upon low-level ones; use abstraction instead
