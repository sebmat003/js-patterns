(function () {
  // interface Programist {
  //   salary: number;
  //   experience: number;
  //   type: Seniority;
  //   say(message: string): void;
  // }

  enum Seniority {
    JUNIOR,
    MID,
    SENIOR,
  }

  class Junior {
    salary = 5000;
    experience = 1;
  }

  class Mid {
    salary = 10000;
    experience = 3;
  }

  class Senior {
    salary = 15000;
    experience = 5;
  }

  class ProgrammistFactory {
    programmist: any = {};
    hireProgrammist(type: Seniority): any {
      switch (type) {
        case Seniority.JUNIOR:
          this.programmist = new Junior();
          break;
        case Seniority.MID:
          this.programmist = new Mid();
          break;
        case Seniority.SENIOR:
          this.programmist = new Senior();
          break;
      }

      this.programmist.type = type;
      this.programmist.say = () => {
        console.log(
          "I am the programmist at seniority level:",
          this.programmist.type,
          "and",
          this.programmist.experience,
          "year of experience"
        );
      };
      return this.programmist;
    }
  }

  const factory = new ProgrammistFactory();
  const programmists = [];
  programmists.push(factory.hireProgrammist(Seniority.JUNIOR));
  programmists.push(factory.hireProgrammist(Seniority.SENIOR));

  programmists.forEach((p) => {
    p.say();
  });
})();
