# Proxy

- An interface for accessing a particular resource.
- A class that functions as an interface to a particular resource. That resource may be remote, expensive to construct, or may require logging or some other added functionality.

# Motivation

- You are calling foo.Bar()
- This assumes that foo is in the same process as Bar()
- What if, later on , you want to pull all Foo- related operations into a separate process
  - Can you avoid changing your code ?
- Proxy to the rescue!
  - same interface, entirely different behavior
- This is called a communication proxy
  - other types of proxy are : logging, virtual, gurading,..
