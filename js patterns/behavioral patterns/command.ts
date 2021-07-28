(function () {
  interface ICommand<T> {
    execute: () => T;
  }

  class Command<T> implements ICommand<T> {
    constructor(private fn: () => T) {}

    public execute(): T {
      return this.fn();
    }
  }

  class ShowDate extends Command<Date> {
    constructor() {
      super(() => this.getCurrentDate());
    }

    private getCurrentDate(): Date {
      return new Date();
    }
  }

  class AddNumbers extends Command<number> {
    constructor(x: number, y: number) {
      super(() => this.add(x, y));
    }

    private add(x: number, y: number): number {
      return x + y;
    }
  }

  class Organizer {
    public displayDate(): void {
      const showDate = new ShowDate();
      console.log(showDate.execute());
    }
    public addNumbers(x: number, y: number): void {
      const addNumbers = new AddNumbers(x, y);
      console.log(addNumbers.execute());
    }
  }

  const organizer = new Organizer();
  organizer.displayDate();
  organizer.addNumbers(5, 3);
})();
