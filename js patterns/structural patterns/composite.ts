(function () {
  class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  class FamilyComposite {
    children: (Person | FamilyComposite)[] = [];
    add(child: Person | FamilyComposite) {
      this.children.push(child);
    }
  }

  const root = new FamilyComposite();
  root.add(new Person("Ann", "ZTY"));
  root.add(new Person("B", "sdq"));
  root.add(new Person("Ccc", "sddd"));
  const firstBranch = new FamilyComposite();
  firstBranch.add(new Person("Elizabeth", "Sorrow"));
  firstBranch.add(new Person("Paul", "Walker"));
  const secondBranch = new FamilyComposite();
  secondBranch.add(new Person("Sebastian", "Holls"));
  secondBranch.add(new Person("Mike", "Pierson"));
  const nestedBranch = new FamilyComposite();
  nestedBranch.add(new Person("Someone", "not defined"));
  secondBranch.add(nestedBranch);
  root.add(firstBranch);
  root.add(secondBranch);
  console.log(JSON.stringify(root));
})();
