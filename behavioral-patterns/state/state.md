# State Design Pattern

- A pattern in which the object's behavior is determined by its state. An object transitions from one state to another (something needs to trigger a transition).
- A formalized construct which manages state and transitions is called state machine.
- Given sufficient complexity, it pays to formally define possible states and events/triggers
- Can define
  - State entry/exit behaviors
  - Actions when a particular event causes a transition
  - Guard conditions enabling/disabling a transition
  - Default action when no transitions are found for an event.

---

# Motivation

- Consider an oridnary telephone.
- What you do with it depends on the state of the phone/line
  - If it's ringing or your want to make a call, you can pick it up
  - Phone must be off the hook to talk/make a call
  - If you try calling someone, and it's busy, you put the handset down
- Changes in state can be explicit or in response to event (Observer patter)
