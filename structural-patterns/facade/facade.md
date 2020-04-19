# Facade Design Pattern

- Facade (Pronous --> Fa-sade not Fa-cade)
- Exposing several components through a single easy to use interface.
- Facade provides a simple, easy to understand/user interface over a large sophisticated body of code.
- Build a Facade to provide a simplified API over a set of classes.
- May wish to (optionally) expose internals through the facade.
- May allow users to 'escalate' to use more complex APIs if the need to

---

# Motivation

- Balancing complexity and presentation/usability
- Typical home
  - Home has Many subsystem (ex- electrical, sanitation)
  - Also has complex internal structure (floor layer)
  - but as end-user is not exposed to those internals/complex subsystem
- Same with s/w
  - Many systems/jobs working to provide required functionality but..
  - API consumers want an interface and wants everything to 'just work' without knowing much internals
