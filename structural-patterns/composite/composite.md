# Composite Design Pattern

- Treating Individual and Aggregate Objects uniformly.
- A mechanism for treating individual (scalar) objects and compositions of objects (i.e.- arrays of objects) in a unifrom manner(same manner/ same set of interface/same operations).
- Objects can use other objects via inheritance/composition.
- Some composed and singular objects need similar/identical behaviors
- Composite design pattern lets us treat both types of objects uniformly.
- Javascript supports iteration with Symbol.iterator
- A single object can make itself iterable by yelding this.

---

# Motivation

- Objects use other object's fields/methods through inheritance and composition
- Composition let us make compound objects
  - Ex:
  - Mathematical expression composed of simple expressions or
  - A shape group made of several different shapes.
- Composite design pattern is used to treat both single (scalar) and composite object uniformly.
  - i.e.- class Foo and an array (containing Foo's) having the same API

---
