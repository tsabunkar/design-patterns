# Template-Method Design pattern

- A high-level blueprint for an algo to be completed by inheritors.
- Allow us to define the 'skeleton' of the algo in base class, with concrete/detailed implementation defined in subclasses.
- define a high level algo
- define constituent parts as empty method/properties
- Inherit the algo class, providing necessary overrides

---

# Motivation

- Algo can be decomposed into common parts + specifics
- Strategy pattern does this through composition
  - High-level algo uses an interface
  - Concrete implementations implement the interface
- Template Method does the same thing through inheritance
  - Overall algo makes use of empty ('abstract') members
  - Inheritors override those members
  - Parent template method invoked
