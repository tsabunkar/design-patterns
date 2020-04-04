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
