# Design Patterns :

- These are typical solution to common problems in software design.
- Each design pattern is like a blueprint to solve a particular design problem.
- The pattern is not a specific piece of code, but a general concept for solving a particular problem.
- Patterns are often confused with algorithms, because both concepts describe typical solutions to some known problems
- While an algorithm always defines a clear set of actions that can achieve some goal, a pattern is a more high-level description of a solution.
- NOTE : The code of the same pattern applied to two different programs may be different.
- In General there are 23 Design Patterns, ever software engineer should know.
- Design patterns can speed up the development process by providing tested, proven development paradigms.
- Design patterns are common architectural approaches
- Popularized by the Gang of Four book (1994) ==> Element of Reusable Object-Oriented Software
- Translated to many lang - C#, C++, Java, JS
- Universally relevant
  - Internalized in some programming langages.
  - Libraries

---

# Why should I learn patterns ?

- Design patterns are a toolkit of tried and tested solutions to common problems in software design.
- knowing patterns is still useful because it teaches you how to solve all sorts of problems using principles of object-oriented design.
- Design patterns define a common language that you and your teammates can use to communicate more efficiently.

---

# Classification of Design patterns :

- The most basic and low-level patterns are often called idioms.
- The most universal and high-level patterns are architectural patterns.
- Design patterns are typically split into 3 categories this is called Gamma Categorization after Erich Gamma one of GoF Author.
- 3 patterns :
  - Creational patterns
  - Structural patterns
  - Behavioral patterns
- Creational patterns :
  - provide object creation mechanisms that increase flexibility and reuse of existing code.
  - Deals with the creation (construction of objects)
  - Explicit (constructor) v/s implicit (D.I, reflection, etc)
  - Wholesale (single statement) v/s piecewise (step-by-step)
- Structural patterns :
  - explain how to assemble objects and classes into larger structures, while keeping the structures flexible and efficient.
  - Concerned with the structure (ex- class members)
  - Manay patterns are wrappers that mimc the underlying class interface
  - Stress the importance of good API design
- Behavioral patterns :
  - take care of effective communication and the assignment of responsibilities between objects.
  - They are all different; no central theme.
  - They are unique in there ways.

---

# Creational patterns

- provide object creation mechanisms that increase flexibility and reuse of existing code.
- Different Creational patterns are :
  - Factory Method
  - Abstract Method
  - Builder
  - Prototype
  - Singleton

---

# Structural patterns

- explain how to assemble objects and classes into larger structures, while keeping the structures flexible and efficient.
- Different Structural patterns are :
  - Adapter
  - Bridge
  - Composite
  - Decorator
  - Facade
  - Flyweight
  - Proxy

---

# Behavioral patterns

- take care of effective communication and the assignment of responsibilities between objects.
- Behavioral Structural patterns are :
  - Chain of Responsibility
  - Command
  - Interpreter
  - Iterator
  - Mediator
  - Memento
  - Observer
  - State
  - Strategy
  - Template Method
  - Visitor

---

# Anti-pattern:

- Pattern which is supposed to be bad
- example: God Object (A God object is an object that knows too much or does too much)
- Single Responsibility Principle --> Antipattern is God Object. [Thus, SRP recommends to if a class is having more than one responsibilities then just create a new class which can manage those responsibilities]
- To Tackle this God Object Anti-Pattern : A common programming technique is to separate a large problem into several smaller problems and create solutions for each of them.

---

NOTE: In js we cannot have private methods.
