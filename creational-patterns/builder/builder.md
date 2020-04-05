# Motivation to Builder Design Pattern

- Some objects are simple and can be created in a single initializer call.
- Other objects require a lot of ceremony to create.
- Having an object with 10 initializer arguments is not productive.
- Instead, opt for piecewise construction
- Builder providers an API for constructing an object step-by-step
- Definition of Builder design pattern : When piecewise object construction is complicated, builder provide an API for doing it succinctly (in a brief and clearly expressed manner.)
