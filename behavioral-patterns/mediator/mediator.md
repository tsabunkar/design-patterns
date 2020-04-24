# Mediator Design Pattern

- Facilitates communication between components.
- A compnent that facilitates communication between other components without them necessarily being aware of each other or have direct (reference) access to each other.

---

# Motivation

- Components may go in and out of a system at any time
  - Chat room participants
  - Players in an MMORPG
- It makes no sense for them to have direct reference to one another
  - Those reference may go dead
- Solution: have them all refer to some central component that facilitates communication.
