# Motivation to use Factory Design patter

- Object creation logic become too convoluted (difficult/complex)
- Initialized is not descriptive
  - Name is always _init_
  - Cannot overload with same sets of arguments with different names
  - can turn into 'optional parameter hell'
- Wholesale object creation (non-piecewise, unlike Builder) can be outsourced to
  - A separate method (Facotry Method)
  - That may exist in a separate class (Facotry)
  - Can create hirearchy of factories with Abstract Factory

---

# Factory

- A component responsible solely for the wholesale (not piecewise) creation of objects
- A factory method is a static method that creates objects.
- A factory is any entity that can take care of object creation.
- A factory can be external or reside inside the object as an inner class.
- Hierarchies of factories can be used to create related objects.
