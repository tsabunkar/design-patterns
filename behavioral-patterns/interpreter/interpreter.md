# Interpreter Design Pattern

- A component that processes structured text data. Does so by turning it into two steps:
  - separate lexical tokens (lexing)
  - then Interpreting sequences of said tokens (parsing).
- Basically Interpreter design pattern works in two stages:
  - Lexing: which turns text into set/list of tokens
  - Parsing: which parses token into meaningful constructs
- parsed data can then be traversed.

---

# Motivation

- Textual input needs to be processed
  - Ex: turned into OOP structures
- Some examples:
  - Programming language compilers, interpreters and IDEs
  - HTML, XML and similar
  - Numeric expressions (3+4/5)
  - Regular expressions
- Turning strings into OOP based structures in a complicated process.

---
