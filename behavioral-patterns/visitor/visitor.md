# Visitor Design Pattern

- Allows adding extra behaviors to entire hierarchies of classes.
- A component (visitor) that knows how to traverse a data structure composed of (possibly related) types.
- Classic visitor:
  - Propagate an accept (Visitor v) method throughout the entier hierarchy.
  - Create a visitor with visitFoo(foo), visitBar(bar),.. for each element in the hierarchy
  - Each accept() simply calls visitor.visitXXX(this)

---

# Motivation

- Need to define a new operation on an entire class hirearchy.
  - Ex: make a document model printable to HTML/Markdown
- Do not want to keep modifiying every class in the hierarchy
- Need access to the non-common aspects of classes in the hierarchy
- Create an external component to handle rendering
  - But avoid explicit type checks

---

# How follow the code

1. intrusive.js
2. reflective.js
3. classic.js
