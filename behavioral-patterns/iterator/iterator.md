# Iterator Design Pattern

- An object that facilitates the traversal of a particular data structure.

---

# Motivation

- Iteration (traversal) is a core functionality of various data structutres.
- An iterator is a class that facilitates the traversal
  - Keeps a reference to the current element
  - knows how to move to different element
  - knows when it's done and there are no elements to move to
- JavaScript supports this through
  - Symbol.iterator memeber that returns
  - An iterator object with a function called next() that
  - Return an object containing.
    - The value being iterated
    - The done flag indicating wheather iteration is finished
  - An iterator object itself can also be made iterable.
