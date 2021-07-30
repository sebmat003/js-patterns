(function () {
  abstract class Visitor {
    visit(object: any): void {}
  }
  class ExtraTurbo extends Visitor {
    visit(car: Car): void {
      car.setAcceleration = car.getAcceleration * 0.9;
      car.setMaxSpeed = car.getMaxSpeed + 25;
    }
  }

  class FourWheelDrive extends Visitor {
    visit(car: Car) {
      car.setAcceleration = car.getAcceleration * 0.8;
    }
  }

  class Car {
    private _doors: number = 0;
    private _maxSpeed: number = 0;
    private _acceleration100: number = 0;
    constructor(doors: number, maxSpeed: number, acceleration: number) {
      this._doors = doors;
      this._maxSpeed = maxSpeed;
      this._acceleration100 = acceleration;
    }

    public accept(visitor: Visitor): void {
      visitor.visit(this);
    }

    get getDoors() {
      return this._doors;
    }

    get getMaxSpeed() {
      return this._maxSpeed;
    }

    get getAcceleration() {
      return this._acceleration100;
    }

    set setDoors(doors: number) {
      this._doors = doors;
    }

    set setMaxSpeed(maxSpeed: number) {
      this._maxSpeed = maxSpeed;
    }

    set setAcceleration(acceleration: number) {
      this._acceleration100 = +acceleration.toFixed(2);
    }
  }

  const car = new Car(4, 220, 8.3);
  const extraTurbo = new ExtraTurbo();
  const fourWheelDrive = new FourWheelDrive();
  console.log(car);
  car.accept(extraTurbo);
  car.accept(fourWheelDrive);
  console.log(car);
})();
