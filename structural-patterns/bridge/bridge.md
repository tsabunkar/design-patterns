# Bridge Design Pattern

- Connecting components together through abstractions.
- Bridge prevents a 'Cartesian product' complexity explosion or State Space Explosion
  - Example:
  - Base class ThreadScheduler
  - Can be preemptive or corperative
  - Can run on Windows or Linux
  - End up with a 2 x 2 scenario: WindowsPTS, UnixPTS, WindowsCTS, UnixCTS
- A mechanism that decouples an interface (hierarchy) from an implementation (hierarchy).
- NOTE: JS has duck typing (loosely typed lang), so definitions of interfaces are not strictly necessary.
- Bridge will decouple abstraction from implementation.
- Both can exist as hirearchies.
- A stronger form of encapsulation.
