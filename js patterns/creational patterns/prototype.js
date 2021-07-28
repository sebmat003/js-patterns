class AnimalPrototype {
  constructor(proto) {
    this.proto = proto;
  }
  clone() {
    const animal = new Animal();
    animal.name = proto.name;
    animal.msg = proto.msg;
    return animal;
  }
}

class Animal {
  constructor(name, msg) {
    this.name = name;
    this.msg = msg;
  }

  say() {
    console.log(this.msg);
  }
}

const proto = new Animal('dog', 'barking');
const prototype = new AnimalPrototype(proto);
const animal = prototype.clone();
animal.say();