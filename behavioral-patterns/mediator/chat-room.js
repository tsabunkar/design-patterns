class Person {
  constructor(name) {
    this.name = name;
    this.chatLog = [];
  }

  receive(sender, message) {
    let s = `${sender}: '${message}'`;
    console.log(`[${this.name}'s chat session] ${s}`);
    this.chatLog.push(s);
  }

  // broadcast the message to complete room
  say(message) {
    this.room.broadcast(this.name, message);
  }

  // sending private message
  pm(who, message) {
    this.room.message(this.name, who, message);
  }
}

// Central component which act as mediator`
class ChatRoom {
  constructor() {
    this.people = [];
  }

  broadcast(source, message) {
    for (let p of this.people)
      if (p.name !== source) p.receive(source, message);
  }

  join(p) {
    let joinMsg = `${p.name} joins the chat`;
    this.broadcast("room", joinMsg);
    p.room = this;
    this.people.push(p);
  }

  message(source, destination, message) {
    for (let p of this.people)
      if (p.name === destination) p.receive(source, message);
  }
}

let room = new ChatRoom();

let john = new Person("John");
let jane = new Person("Jane");

room.join(john); // when john joins the room, no one else is there, so we can't see the message
room.join(jane);

console.log("---both join the room----");

john.say("hi room");
jane.say("oh, hey john");

console.log("----Let new person joined----");

let simon = new Person("Simon"); // jane and john can see (thus 2 messages)

room.join(simon);
simon.say("hi everyone!");

console.log("-------private room------");

jane.pm("Simon", "glad you could join us!");
