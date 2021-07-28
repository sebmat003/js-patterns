class Animal {
  constructor(name, msg) {
    this.name = name;
    this.msg = msg;
  }

  say() {
    console.log(this.msg);
  }
}

class AnimalFactory {
  create(name, msg) {
    return new Animal(name, msg);
  }
}

const factory = new AnimalFactory();
const animals = [];
animals.push(factory.create('dog', 'hau hau'));
animals.push(factory.create('cat', 'miau miau'));
console.log(animals);