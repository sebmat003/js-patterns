(function () {
  class State {
    protected state: Object = new Object();
    public getState(): Object {
      return this.state;
    }

    public setState(state: Object): void {
      this.state = state;
    }
  }

  class Memento extends State {
    constructor(state: Object) {
      super();
      this.state = state;
    }
  }

  class Originator extends State {
    public saveToMemento(): Memento {
      return new Memento(this.state);
    }

    public restoreFromMemento(m: Memento): void {
      this.state = m.getState();
    }
  }

  class MementoHolder {
    private mementos: any[] = [];
    public addMemento(m: Memento): void {
      this.mementos.push(m);
    }

    public getMemento(index: number): Memento {
      return this.mementos[index];
    }
  }

  const mementoHolder = new MementoHolder();
  const originator = new Originator();
  originator.setState({ id: 1, msg: "first msg" });
  console.log(originator.getState());
  originator.setState({ id: 2, msg: "second msg" });
  mementoHolder.addMemento(originator.saveToMemento());
  console.log(originator.getState());
  originator.setState({ id: 3, msg: "something new" });
  console.log(originator.getState());
  originator.restoreFromMemento(mementoHolder.getMemento(0));
  console.log(originator.getState());
})();
