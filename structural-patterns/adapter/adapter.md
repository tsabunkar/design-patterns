# Adapter Design Pattern

- Getting the you want from the interface you have.
- example :
  - Electrical devices have different power (interface) requirements:
    - can have differen voltages
    - Socket/plug type can be different (Europe, UK, USA)
  - So we cannot change your device to charge our devices rather we use an adapter
  - Thus, we use a special device (an adapter) to give us the interface we require from the interface we have.
- A construct which adapts an existing interface X to conform to the required interface Y.
- Implementing an adapter is easy.
- Determine the API you have and the API you need.
- Create a component which aggregates (has a reference to,..) the adaptee
- Intermediate representations can pile up: use caching and other optimizations.
