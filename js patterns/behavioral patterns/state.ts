(function () {
  class Elevator {
    private _state: WaitingState | MovingState = new WaitingState();

    openDoor() {
      this._state = new WaitingState();
      this._state.stop();
      console.log("open doors");
    }

    closeDoor() {
      console.log("close doors");
      this._state = new MovingState();
      this._state.move();
    }
  }

  class WaitingState {
    stop(): void {
      console.log("stop elevator");
    }
  }

  class MovingState {
    move(): void {
      console.log("move elevator");
    }
  }

  const elevator = new Elevator();
  elevator.closeDoor();
  elevator.openDoor();
})();
