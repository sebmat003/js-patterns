(function () {
  class Participant {
    public mediator: any = null;
    public name: string = "";

    constructor(name: string) {
      this.name = name;
    }

    send(message: string, to: Participant | "ALL"): void {
      if (this.mediator) {
        this.mediator.notify(message, this, to);
      }
    }

    receive(message: string, from: Participant): void {
      console.log(from.name + " to " + this.name + ": " + message);
    }
  }

  class Mediator {
    private participants: { [name: string]: Participant } = {};
    constructor(participants: Participant[]) {
      participants.forEach((p: Participant) => {
        p.mediator = this;
        this.participants[p.name] = p;
      });
    }

    addParticipant(participant: Participant): void {
      participant.mediator = this;
      this.participants[participant.name] = participant;
    }

    removeParticipant(participant: Participant): void {
      delete this.participants[participant.name];
    }

    notify(message: string, from: Participant, to: Participant | "ALL") {
      if (to === "ALL") {
        for (const key in this.participants) {
          if (this.participants[key] !== from) {
            this.participants[key].receive(message, from);
          }
        }
      } else {
        to.receive(message, from);
      }
    }
  }
  const mrx = new Participant("Mr X");
  const john = new Participant("John");
  const ann = new Participant("Ann");
  const elizabeth = new Participant("Elizabeth");
  const participants = [mrx, john, ann];
  const mediator = new Mediator(participants);
  mediator.addParticipant(elizabeth);
  mrx.send("All I need is love", "ALL");
  ann.send("Everyone heard that", mrx);
  elizabeth.send("Guys, can you help me?", "ALL");
  john.send("Yes", elizabeth);
  mrx.send("OK", elizabeth);
})();
