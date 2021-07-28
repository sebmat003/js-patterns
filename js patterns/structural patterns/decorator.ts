(function () {
  abstract class Machine {
    abstract run(): void;
  }

  abstract class MachineDecorator extends Machine {
    abstract open(): void;
    abstract close(): void;
    protected machine: Machine;

    constructor(originalMachine: Machine) {
      super();
      this.machine = originalMachine;
    }
  }

  class WashingMachine extends MachineDecorator {
    public run(): void {
      console.log("LOADING");
      console.log("RUN THE PROGRAM");
    }

    public open(): void {
      console.log("OPEN THE MACHINE");
    }

    public close(): void {
      console.log("CLOSE THE MACHINE");
    }
  }

  class SimpleMachine extends Machine {
    public run(): void {
      console.log("RUN THE SIMPLE PROGRAM");
    }
  }

  const simpleMachine = new SimpleMachine();
  simpleMachine.run();
  const washingMachine = new WashingMachine(simpleMachine);
  washingMachine.run();
  washingMachine.open();
})();
