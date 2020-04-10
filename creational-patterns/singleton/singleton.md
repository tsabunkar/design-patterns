# Singleton Design Pattern

- A design pattern every developer loves to hate..
- When discussing which patterns to drop, we found that we still them all. (Not really- I'm, in favor of dropping Singleton. It use is almost always a design smell) - by Erich Gamma
- A component which is instantiated only onces.

---

# Motivation

- For some component it only makes sense to have one in the system
  - Database repository
  - Object facotry
- Ex: The constructor call is expensive
  - We want initialization to only happen once
  - We provide everyone with the same instance
- Want to prevent anyone creating additional copies

---
