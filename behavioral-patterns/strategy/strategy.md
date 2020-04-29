# Strategy Desgin Pattern

- Enables te exact behavior of a system to be selected at run-time.
- Define an algo at high-level
- Define the interface you expect each strategy to follow
- Provide for dynamic composition of strategies in the resulting object.

---

# Motivation

- Many algo can be decomposed into higher and lower level parts
- Making tea can be decomposed into
  - The process of making a hot beverage (boil water, pour into cup) [Highlevel specification]
  - Tea-specific things (put teabag into water) [Lowlevel specification]
- The high-level algo can then be reused for making coffee or hot chocolate
  - Supported by beverage-sepcific strategies
