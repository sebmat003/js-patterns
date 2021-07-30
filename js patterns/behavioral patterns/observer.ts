(function () {
  class Observer {
    update(message: string) {
      console.log(message);
    }
  }

  class Subject {
    private _observers: Set<Observer> = new Set();

    subscribe(observer: Observer): void {
      this._observers.add(observer);
    }

    unsubscribe(observer: Observer): void {
      this._observers.delete(observer);
    }

    notify(message: string): void {
      this._observers.forEach((observer) => {
        observer.update(message);
      });
    }
  }

  const subject = new Subject();
  subject.subscribe(new Observer());
  subject.subscribe(new Observer());
  subject.notify("first message");
})();
