# Motivation of Prototype Design Pattern

- Complicated objects (ex- cars) aren't designed from scratch
  - They reiterate existing designs
- An existing (partially or fully constructed) design is a prototype.
- We make a copy (clone) the prototype and customize it
  - Requires 'deep copy' support.
- We make the cloning convient (ex- via a Factory).

---

# Prototype

- A partially or fully initialized object that you copy (clone) and make use of.
- To implement a protoype, partially construct an object and store it somewhere.
- Deep Copy the prototype.
- Customize the resulting instance.
- A factory provides a convenient API for using prototypes.

---
