# Motivation to Builder Design Pattern

- Some objects are simple and can be created in a single initializer call.
- Other objects require a lot of ceremony to create.
- Having an object with 10 initializer arguments is not productive.
- Instead, opt for piecewise construction
- Builder providers an API for constructing an object step-by-step
- Definition of Builder design pattern : When piecewise object construction is complicated, builder provide an API for doing it succinctly (in a brief and clearly expressed manner.)
- builder is separate componet which will help you to build particular object. ex- we have built/develope a HtmlBuilder (builder desgin pattern) which is separate component that helps us to build the tag elemenets easily without use need to manage the html formatting b/w parent, child elements, etc

---

# Builder Facets

- Some times a simple builder is not sufficient to build an object, we require groups builders. Then how do these builders interact with each other ? ==> using builder-facets
