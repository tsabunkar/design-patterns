# Decorator Design Pattern

- Adding behavior without altering the class itself.
- Decorator facilitates the additional of behaviors to individual objects without inherting from them.
- A decorator keeps the reference to the decorated object(s).
- Adds utility fields and methods to arugment the object's features.
- May or may not forward calls to the underlying object.

---

# Motivation

- Want to argument an object with additional functionality.
- Do not want to re-write or alter exisiting code (OCP)
- Want to keep new functionality separate (SRP)
- Need to able to intreact with exisiting structures.
- Two options:
  - Inherit from required object (if possible)
  - Build a Decorator, which simply reference the decorated object(s)

---
